/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Cafe } from '../../types/Cafe';

const apiKey = 'fsq3OiV7rGPpopKMqvCNW5AgMuFUPqaVsHHUSkDZO1/9Brg=';

type PostState = {
  cafes: Cafe[];
  loaded: boolean;
  hasError: boolean;
};

const initialState: PostState = {
  cafes: [],
  loaded: true,
  hasError: false,
};

export const init = createAsyncThunk(
  'cafes/searchCafes',
  async (query: string) => {
    const data = await fetch(
      `https://api.foursquare.com/v3/places/search?query=coffee&near=${query}&limit=50`,
      {
        headers: {
          Authorization: apiKey,
        },
      },
    );

    const response = await data.json();

    // console.log(response.results);

    return response.results;
  },
);

const cafesSlice = createSlice({
  name: 'cafes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(init.pending, state => {
      state.loaded = false;
      state.hasError = false;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.cafes = action.payload;
      state.loaded = true;
    });

    builder.addCase(init.rejected, state => {
      state.loaded = true;
      state.hasError = true;
    });
  },
});

export default cafesSlice.reducer;
