import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export type FakeStoreState = {

};

const initialState: FakeStoreState = {

};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const fakeStoreSlice = createSlice({
  name: 'fakeStore',
  initialState,

  reducers: {

  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
      
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {

  //     })
  //     .addCase(incrementAsync.rejected, (state) => {
        
  //     });
  // },
});

export const {  } = fakeStoreSlice.actions;

export default fakeStoreSlice.reducer;