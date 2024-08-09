import { createSlice } from '@reduxjs/toolkit';
import {
  loginOutThunk,
  signInThunk,
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
  profile: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleSignUp)
      .addCase(signInThunk.fulfilled, handleSignUp)
      .addCase(refreshThunk.fulfilled, handleRefresh)
      .addCase(refreshThunk.rejected, state => {
        state.token = null;
        state.profile = null;
      })

      .addCase(loginOutThunk.fulfilled, handleLoginOut)

      .addMatcher(
        ({ type }): boolean => type.endsWith('/pending'),
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
