import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cafesSlice from '../features/cafes/cafes';
import authSlice from '../features/auth/auth';
import detailsSlice from '../features/details/details';

export const store = configureStore({
  reducer: {
    cafes: cafesSlice,
    auth: authSlice,
    details: detailsSlice,
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
