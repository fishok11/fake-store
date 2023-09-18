import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CartItem, CartItemToAdded,  } from './types';
import toast from 'react-hot-toast';
import { showLogInPage } from './fakeStoreSlice';

export type CartState = {
  isLoading: boolean;
  products: Array<CartItem>;
};

const initialState: CartState = {
  isLoading: false,
  products: [],
};

export const addProductToCart = createAsyncThunk<CartItem, CartItemToAdded, {rejectValue: string}>(
  'fakeStore/addProductToCart',
  async (cartItem: CartItemToAdded, {rejectWithValue, dispatch}) => {

    if (cartItem.userId !== undefined) {
      const response = await fetch('https://fakestoreapi.com/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem)
      });
      
      toast.success('Product edded to cart!');

      if (!response.ok) {
        toast.error('Error!');
        return rejectWithValue('Server error!');
      } 

      const data = await response.json();
      
      return data;
    } else {
      dispatch(showLogInPage());
    }
  }
);

export const getCart = createAsyncThunk<CartItem[], undefined, {rejectValue: string}>(
  'getCart/addProductToCart',
  async (_, {rejectWithValue}) => {
    const response = await fetch('https://fakestoreapi.com/carts/user/1')

    if (!response.ok) {
      toast.error('Error!');
      return rejectWithValue('Server error!');
    } 

    const data = await response.json();

    console.log(data);
    
    return data;
  }
);

export const userSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(addProductToCart.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addProductToCart.fulfilled, (state, action) => {
      state.isLoading = false;
    })
    .addCase(getCart.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getCart.fulfilled, (state, action) => {
      const i = action.payload
      // state.products = ;
      state.isLoading = false;
    })
  },
});

// export const {  } = userSlice.actions;

export const cartState = (state: RootState) => state.cart;

export default userSlice.reducer;