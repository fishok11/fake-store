import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';
import { User } from './types';

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
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      })
    });

    if (!response.ok) {
      return rejectWithValue('Server error!');
    } 

    const data = await response.json();

    return data;
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