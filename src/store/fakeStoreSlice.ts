import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { Product, Products } from './types';
import toast from 'react-hot-toast';

export type FakeStoreState = {
  products: Products;
  product: Product | null;
  categories: string[];
  category: string;
  fetchCategory: boolean;
  logInPage: boolean;
  isLoading: boolean;
};

const initialState: FakeStoreState = {
  products: [],
  product: null,
  categories: [],
  category: '',
  fetchCategory: false,
  logInPage: false,
  isLoading: false,
};

export const getAllProducts = createAsyncThunk<Products, undefined, {rejectValue: string}>(
  'fakeStore/getAllProducts',
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products');
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
      const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      return data;
    } catch (error) {
      console.log(error);
      toast.error('Error!');
      return rejectWithValue('Server error!');
    }
  }
);

export const getSpecificCategory = createAsyncThunk<Products, string, {rejectValue: string}>(
  'store/getSpecificCategory',
  async (category: string, {rejectWithValue}) => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      return data;
    } catch (error) {
      console.log(error);
      toast.error('Error!');
      return rejectWithValue('Server error!');
    }
  }
);

export const getAllCategories = createAsyncThunk<string[], undefined, {rejectValue: string}>(
  'fakeStore/getAllCategories',
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products/categories',);
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
    filterCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.fetchCategory = !state.fetchCategory;
    },
    clearFilter: (state) => {
      state.category = '';
      state.fetchCategory = !state.fetchCategory;  
    },
    showLogInPage: (state) => {
      state.logInPage = true;
    },
    hideLogInPage: (state) => {
      state.logInPage = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(getSpecificCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSpecificCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
  },
});

export const { filterCategory, clearFilter, showLogInPage, hideLogInPage } = fakeStoreSlice.actions;

export const fakeStoreState = (state: RootState) => state.fakeStore;

export default fakeStoreSlice.reducer;