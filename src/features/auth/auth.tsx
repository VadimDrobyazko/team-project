/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  email: string;
  name: string;
}

interface AuthState {
  currentUser: {
    user: User | null;
    token: string | null;
  };
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: { user: null, token: null },
  loading: false,
  error: null,
};

export const signIn = createAsyncThunk(
  'auth/login',
  async (UserData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/user/token/',
        UserData,
      );

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any).response.data.errors);
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (UserData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/user/register/',
        UserData,
      );

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any).response.data.errors);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.currentUser.user = null;
      state.currentUser.token = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signIn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser.user = action.payload.user;
        state.currentUser.token = action.payload.token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser.user = action.payload.user;
        state.currentUser.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: { auth: AuthState }) =>
  state.auth.currentUser.user;

export const selectCurrentToken = (state: { auth: AuthState }) =>
  state.auth.currentUser.token;

export const selectAuthLoading = (state: { auth: AuthState }) =>
  state.auth.loading;

export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;

export type { AuthState };
