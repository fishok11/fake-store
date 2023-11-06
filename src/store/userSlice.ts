import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { DEFAULT_URL } from '../utils';
import { User, UserLogIn, UserSignUp } from './types';
import toast from 'react-hot-toast';

export type UserState = {
  isLoading: boolean;
};

const initialState: UserState = {
  isLoading: false,
};

export const logIn = createAsyncThunk<string, UserLogIn, {rejectValue: string}>(
  'fakeStore/logIn',
  async (user: UserLogIn, {rejectWithValue}) => {
    try {
      const { data } = await axios.post(DEFAULT_URL + 'users', {
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

export const signUp = createAsyncThunk<User, UserSignUp, {rejectValue: string}>(
  'fakeStore/signUp',
  async (user: UserSignUp, {rejectWithValue}) => {
    try {
      const { data } = await axios.post<User>(DEFAULT_URL + 'users', {...user});
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
    .addCase(logIn.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(signUp.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
    })
  },
});

// export const {  } = userSlice.actions;

export const userState = (state: RootState) => state.user;

export default userSlice.reducer;