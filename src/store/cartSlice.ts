import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Cart, CartItem } from './types';
import toast from 'react-hot-toast';
import { showLogInPage } from './fakeStoreSlice';

export type CartState = {
  isLoading: boolean;
};

const initialState: CartState = {
  isLoading: false,
};

export const addProductToCart = createAsyncThunk<Cart, CartItem, {rejectValue: string}>(
  'fakeStore/addProductToCart',
  async (cartItem: CartItem, {rejectWithValue, dispatch}) => {

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

      console.log(data);
      
      return data;
    } else {
      dispatch(showLogInPage());
    }
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
  },
});

// export const {  } = userSlice.actions;

export const cartState = (state: RootState) => state.cart;

export default userSlice.reducer;