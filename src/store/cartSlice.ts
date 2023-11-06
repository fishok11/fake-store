import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
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
  'cart/addProductToCart',
  async (cartItem: CartItemToAdded, {rejectWithValue, dispatch}) => {
    if (cartItem.userId !== undefined) {
      try {
        const { data } = await axios.post('https://fakestoreapi.com/carts', cartItem);
        toast.success('Product edded to cart!');
        return data;
      } catch (error) {
        console.log(error);
        toast.error('Error!');
        return rejectWithValue('Server error!');
      }
    } else {
      dispatch(showLogInPage());
    }
  }
);

export const getCart = createAsyncThunk<CartItem[], undefined, {rejectValue: string}>(
  'cart/getCart',
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/carts/user/1')
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      toast.error('Error!');
      return rejectWithValue('Server error!');
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
    .addCase(getCart.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getCart.fulfilled, (state, action) => {
      // const i = action.payload
      // state.products = ;
      state.isLoading = false;
    })
  },
});

// export const {  } = userSlice.actions;

export const cartState = (state: RootState) => state.cart;

export default userSlice.reducer;