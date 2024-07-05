import { createSlice } from '@reduxjs/toolkit';
import {
  loginOutThunk,
  loginThunk,
  refreshThunk,
  signUpThunk,
} from './authThunk';
import {
  handleFulfilled,
  handleLoginOut,
  handlePending,
  handleRefresh,
  handleRejected,
  handleSignUp,
} from './handlers';
import { AuthState } from './types';

const initialState: AuthState = {
  isLoading: false,
  error: null,
  token: null,
  name: null,
  email: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleSignUp)
      .addCase(loginThunk.fulfilled, handleSignUp)
      .addCase(refreshThunk.fulfilled, handleRefresh)
      .addCase(refreshThunk.rejected, state => {
        state.token = null;
        state.name = null;
        state.email = null;
        // localStorage.clear()
      })

      .addCase(loginOutThunk.fulfilled, handleLoginOut)

      .addMatcher(
        ({ type }): boolean => type.endsWith('/pendihg'),
        handlePending
      )
      .addMatcher(
        ({ type }): boolean => type.endsWith('/fulfilled'),
        handleFulfilled
      )
      .addMatcher(
        ({ type }): boolean => type.endsWith('/rejected'),
        handleRejected
      );
  },
});

export const authReduser = authSlice.reducer;
