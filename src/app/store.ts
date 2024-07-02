import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cafesSlice from '../features/cafes/cafes';
import photoSlice from '../features/Photo/photo';

export const store = configureStore({
  reducer: {
    cafes: cafesSlice,
    photo: photoSlice,
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
