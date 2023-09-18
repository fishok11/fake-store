import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { User } from './types';
import toast from 'react-hot-toast';

export type UserState = {
  token: string;
  isLoading: boolean;
};

const initialState: UserState = {
  token: '',
  isLoading: false,
};

export const logIn = createAsyncThunk<string, User, {rejectValue: string}>(
  'fakeStore/logIn',
  async (user: User, {rejectWithValue}) => {
    try {
      const { data } = await axios.post('https://fakestoreapi.com/auth/login', {
        username: user.username,
        password: user.password,
      });
      toast.success('Success!');
      return data;
    } catch (error) {
      console.log(error);
      toast.error('Error!');
      return rejectWithValue('Server error!');
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(logIn.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isLoading = false;
    })
  },
});

// export const {  } = userSlice.actions;

export const userState = (state: RootState) => state.user;

export default userSlice.reducer;