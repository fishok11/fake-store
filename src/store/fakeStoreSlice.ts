import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { Product, Products } from './types';
import toast from 'react-hot-toast';
import { DEFAULT_URL } from '../utils'

export type FakeStoreState = {
  products: Products;
  product: Product | null;
  categories: string[];
  category: string;
  fetchCategory: boolean;
  logInPage: boolean;
  signUpPage: boolean;
  isLoading: boolean;
};

const initialState: FakeStoreState = {
  products: [],
  product: null,
  categories: [],
  category: '',
  fetchCategory: false,
  logInPage: false,
  signUpPage: false,
  isLoading: false,
};

export const getProducts = createAsyncThunk<Products, string | undefined, {rejectValue: string}>(
  'fakeStore/getProducts',
  async (category: string | undefined, {rejectWithValue}) => {
    try {
      const { data } = await axios.get(DEFAULT_URL + 'products');

      if (category) {
        return data.filter((product: Product) => product.category === category)
      }

      return data;
    } catch (error) {
      console.log(error);
      toast.error('Error!');
      return rejectWithValue('Server error!');
    }
  }
);

export const getProduct = createAsyncThunk<Product, string | undefined, {rejectValue: string}>(
  'fakeStore/getProduct',
  async (productId: string | undefined, {rejectWithValue}) => {
    try {
      const { data } = await axios.get(DEFAULT_URL + `products/${productId}`);
      return data;
    } catch (error) {
      console.log(error);
      toast.error('Error!');
      return rejectWithValue('Server error!');
    }
  }
);

export const getCategoriesNames = createAsyncThunk<string[], undefined, {rejectValue: string}>(
  'fakeStore/getCategoriesNames',
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await axios.get(DEFAULT_URL + 'categories',);
      return data;
    } catch (error) {
      console.log(error);
      toast.error('Error!');
      return rejectWithValue('Server error!');
    }
  }
);

export const fakeStoreSlice = createSlice({
  name: 'fakeStore',
  initialState,
  reducers: {
    showLogInPage: (state) => {
      state.logInPage = true;
    },
    hideLogInPage: (state) => {
      state.logInPage = false;
    },
    showSignUpPage: (state) => {
      state.signUpPage = true;
    },
    hideSignUpPage: (state) => {
      state.signUpPage = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<Products>) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.product = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategoriesNames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoriesNames.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
  },
});

export const { showLogInPage, hideLogInPage, showSignUpPage, hideSignUpPage } = fakeStoreSlice.actions;

export const fakeStoreState = (state: RootState) => state.fakeStore;

export default fakeStoreSlice.reducer;