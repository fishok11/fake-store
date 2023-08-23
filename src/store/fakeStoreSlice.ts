import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  RootState, 
  // AppThunk 
} from './store';
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
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      toast.error('Error!');
      return rejectWithValue('Server error!');
    } 

    const data = await response.json();

    return data;
  }
);

export const getProduct = createAsyncThunk<Product, string | undefined, {rejectValue: string}>(
  'fakeStore/getProduct',
  async (productId: string | undefined, {rejectWithValue}) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

    if (!response.ok) {
      toast.error('Error!');
      return rejectWithValue('Server error!');
    } 

    const data = await response.json();

    return data;
  }
);

export const getSpecificCategory = createAsyncThunk<Products, string, {rejectValue: string}>(
  'store/getSpecificCategory',
  async (category: string, {rejectWithValue}) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);

    if (!response.ok) {
      toast.error('Error!');
      return rejectWithValue('Server error!');
    } 
    
    const data = await response.json();

    return data;
  }
);

export const getAllCategories = createAsyncThunk<string[], undefined, {rejectValue: string}>(
  'fakeStore/getAllCategories',
  async (_, {rejectWithValue}) => {
    const response = await fetch('https://fakestoreapi.com/products/categories',);

    if (!response.ok) {
      toast.error('Error!');
      return rejectWithValue('Server error!');
    } 

    const data = await response.json();

    return data;
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