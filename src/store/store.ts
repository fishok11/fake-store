import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fakeStoreReducer from './fakeStoreSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    fakeStore: fakeStoreReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
