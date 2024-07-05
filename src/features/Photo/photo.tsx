/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Photo } from '../../types/Photo'; // Уточните, что ваш тип Photo соответствует структуре данных API

const apiKey = 'fsq3OiV7rGPpopKMqvCNW5AgMuFUPqaVsHHUSkDZO1/9Brg=';

type PhotoState = {
  photos: Photo[];
  loaded: boolean;
  hasError: boolean;
};

const initialState: PhotoState = {
  photos: [],
  loaded: true,
  hasError: false,
};

export const init = createAsyncThunk(
  'photos/fetchPhotos',
  async (id: string) => {
    try {
      const response = await fetch(
        `https://api.foursquare.com/v3/places/${id}/photos`,
        {
          headers: {
            Authorization: apiKey,
          },
        },
      );
      const data = await response.json();

      console.log(data.response.photos.items);

      return data.response.photos.items;
    } catch (error) {
      console.error('Ошибка при загрузке фотографий:', error);
      throw error;
    }
  },
);

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(init.pending, state => {
      state.loaded = false;
      state.hasError = false;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.loaded = true;
    });

    builder.addCase(init.rejected, state => {
      state.loaded = true;
      state.hasError = true;
    });
  },
});

export default photoSlice.reducer;
