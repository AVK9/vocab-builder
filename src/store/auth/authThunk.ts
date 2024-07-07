import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, loginOutApi, refreshApi, signUpApi } from 'services/authApi';
import { RootState } from 'store/store';
import {
  ApiError,
  LoginOutApiResponse,
  RefreshApiResponse,
  SignInData,
  SignUpData,
  SignUpResponse,
} from './types';

export const signUpThunk = createAsyncThunk<
  SignUpResponse,
  SignUpData,
  { rejectValue: ApiError }
>('auth/signUp', async (body, { rejectWithValue }) => {
  try {
    return await signUpApi(body);
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});

export const signInThunk = createAsyncThunk<
  SignUpResponse,
  SignInData,
  { rejectValue: ApiError }
>('auth/signIn', async (body, { rejectWithValue }) => {
  try {
    return await loginApi(body);
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});

export const refreshThunk = createAsyncThunk<
  RefreshApiResponse,
  void,
  { rejectValue: ApiError }
>('auth/refresh', async (_, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;
    return await refreshApi(state.auth.token!);
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});

export const loginOutThunk = createAsyncThunk<
  LoginOutApiResponse,
  void,
  { rejectValue: ApiError }
>('auth/loginOut', async (_, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;

    if (state.auth.token !== null) {
      await loginOutApi(state.auth.token);
      return {} as LoginOutApiResponse;
    } else {
      return rejectWithValue({ message: 'Token is missing' } as ApiError);
    }
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});
