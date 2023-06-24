import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';
import { Product, Products } from './types';

export type FakeStoreState = {
  products: Products;
  product: Product | null;
  categories: string[];
  category: string;
  fetchCategory: boolean;
  isLoading: boolean;
};

const initialState: FakeStoreState = {
  products: [],
  product: null,
  categories: [],
  category: '',
  fetchCategory: false,
  isLoading: false,
};

export const getAllProducts = createAsyncThunk<Product[], undefined, {rejectValue: string}>(
  'fakeStore/getAllProducts',
  async (_,{rejectWithValue}) => {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      return rejectWithValue('Server error!');
    } 

    return response.json();
  }
);

export const getSpecificCategory = createAsyncThunk<Product[], string, {rejectValue: string}>(
  "store/getSpecificCategory",
  async (category: string, {rejectWithValue}) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);

    if (!response.ok) {
      return rejectWithValue('Server error!');
    } 
    
    return response.json();
  }
);

export const getAllCategories = createAsyncThunk<string[], undefined, {rejectValue: string}>(
  'fakeStore/getAllCategories',
  async (_,{rejectWithValue}) => {
    const response = await fetch('https://fakestoreapi.com/products/categories');

    if (!response.ok) {
      return rejectWithValue('Server error!');
    } 

    return response.json();
  }
);

export const getProduct = createAsyncThunk<Product, string | undefined, {rejectValue: string}>(
  'fakeStore/getProduct',
  async (productId: string | undefined,{rejectWithValue}) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

    if (!response.ok) {
      return rejectWithValue('Server error!');
    } 

    return response.json();
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
    clearCategory: (state) => {
      state.category = '';
      state.fetchCategory = !state.fetchCategory;
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
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
      })
  },
});

export const { filterCategory, clearCategory } = fakeStoreSlice.actions;

export const fakeStoreState = (state: RootState) => state.fakeStore;

export default fakeStoreSlice.reducer;