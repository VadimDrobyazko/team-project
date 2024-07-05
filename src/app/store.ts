import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cafesSlice from '../features/cafes/cafes';
import authSlice from '../features/auth/auth';

export const store = configureStore({
  reducer: {
    cafes: cafesSlice,
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
