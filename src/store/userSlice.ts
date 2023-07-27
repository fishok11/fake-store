import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';
import { User } from './types';

export type UserState = {

};

const initialState: UserState = {

};

// export const addNewUser = createAsyncThunk<User, User, {rejectValue: string}>(
//   'user/addNewUser',
//   async (user: User, {rejectWithValue}) => {
//     const response = await fetch('https://fakestoreapi.com/users', {
//       method:"POST",
//       body:JSON.stringify(user)
//     })

//     if (!response.ok) {
//       return rejectWithValue('Server error!');
//     } 

//     const data = await response.json();
//     console.log(data);
    
//     return data;
//   }
// );

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // builder
      // .addCase(addNewUser.pending, (state) => {
        
      // })
      // .addCase(addNewUser.fulfilled, (state, action) => {
        
      // })
  },
});

// export const {  } = userSlice.actions;

export const userState = (state: RootState) => state.user;

export default userSlice.reducer;