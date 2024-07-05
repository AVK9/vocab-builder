import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState, SignUpResponse } from './types';

export const handlePending = (state: AuthState) => {
  state.isLoading = true;
  state.error = '';
};
export const handleFulfilled = (state: AuthState) => {
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (
  state: AuthState,
  action: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleSignUp = (
  state: AuthState,
  action: PayloadAction<SignUpResponse>
) => {
  state.token = action.payload.token;
  state.name = action.payload.name;
  state.email = action.payload.email;
  state.isLoading = false;
  state.error = null;
};

export const handleLoginOut = (state: AuthState) => {
  state.token = null;
  state.name = null;
  state.email = null;
  state.isLoading = false;
  state.error = null;
};

export const handleLogin = (
  state: AuthState,
  action: PayloadAction<{ token: string; name: string; email: string }>
) => {
  state.token = action.payload.token;
  state.name = action.payload.name;
  state.email = action.payload.email;
  state.isLoading = false;
  state.error = null;
};
export const handleRefresh = (
  state: AuthState,
  action: PayloadAction<{ token: string; name: string; email: string }>
) => {
  state.token = action.payload.token;
  state.name = action.payload.name;
  state.email = action.payload.email;
};
