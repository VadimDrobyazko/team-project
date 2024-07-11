/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CafeDetails } from '../../types/Details';

type PostState = {
  cafeDetails: CafeDetails | null;
  loaded: boolean;
  hasError: boolean;
};

const initialState: PostState = {
  cafeDetails: null,
  loaded: true,
  hasError: false,
};

export const initDetails = createAsyncThunk(
  'cafes/searchDetails',
  async (cafeId: string) => {
    const response = await fetch(
      `http://localhost:8000/api/main/retrieve-restaurant/${cafeId}/`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch cafe details');
    }

    const data = await response.json();

    console.log(data);

    return data;
  },
);

const cafesSlice = createSlice({
  name: 'cafes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(initDetails.pending, state => {
      state.loaded = false;
      state.hasError = false;
    });

    builder.addCase(initDetails.fulfilled, (state, action) => {
      state.cafeDetails = action.payload;
      state.loaded = true;
    });

    builder.addCase(initDetails.rejected, state => {
      state.loaded = true;
      state.hasError = true;
    });
  },
});

export default cafesSlice.reducer;
