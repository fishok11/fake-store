import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';

export type FakeStoreState = {
  category: string;
  fetchCategory: boolean;
};

const initialState: FakeStoreState = {
  category: '',
  fetchCategory: false,
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
    filterCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.fetchCategory = !state.fetchCategory;
    },
    clearCategory: (state) => {
      state.category = '';
      state.fetchCategory = !state.fetchCategory;
    },
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

export const { filterCategory, clearCategory } = fakeStoreSlice.actions;

export const fakeStoreState = (state: RootState) => state.fakeStore;

export default fakeStoreSlice.reducer;