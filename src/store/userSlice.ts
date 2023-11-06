import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { DEFAULT_URL } from '../utils';
import { User, UserSignUp } from './types';
import toast from 'react-hot-toast';

export type UserState = {
  users: User[],
  isLoading: boolean;
};

const initialState: UserState = {
  users: [],
  isLoading: false,
};

export const usersForLogIn = createAsyncThunk<User[], undefined, {rejectValue: string}>(
  'user/usersForLogIn',
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await axios.get(DEFAULT_URL + 'users');
      return data;
    } catch (error) {
      console.log(error);
      toast.error('Error!');
      return rejectWithValue('Server error!');
    }
  }
);

export const signUp = createAsyncThunk<User, UserSignUp, {rejectValue: string}>(
  'user/signUp',
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
    .addCase(usersForLogIn.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(usersForLogIn.fulfilled, (state, action) => {
      state.users = action.payload
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