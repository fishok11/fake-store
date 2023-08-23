import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';
import { Cart, CartItem } from './types';

export type CartState = {

};

const initialState: CartState = {

};

export const addProductToCart = createAsyncThunk<Cart, CartItem, {rejectValue: string}>(
  'fakeStore/addProductToCart',
  async (cartItem: CartItem, {rejectWithValue}) => {
    const response = await fetch('https://fakestoreapi.com/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem)
    });

    if (!response.ok) {
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

    })
    .addCase(addProductToCart.fulfilled, (state, action) => {

    })
  },
});

// export const {  } = userSlice.actions;

export const cartState = (state: RootState) => state.cart;

export default userSlice.reducer;