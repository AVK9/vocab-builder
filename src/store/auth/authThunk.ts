import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginApi,
  loginOutApi,
  refreshApi,
  setTokenApi,
  signUpApi,
} from 'services/authApi';
import { RootState } from 'store/store';
import {
  ApiError,
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

export const loginThunk = createAsyncThunk<
  SignUpResponse,
  SignInData,
  { rejectValue: ApiError }
>('auth/login', async (body, { rejectWithValue }) => {
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
    // const token = getState().auth.token;
    // if (!token) {
    //   throw new Error('Token is null');
    // }
    // return await refreshApi(token);

    const state = getState() as RootState;
    return await refreshApi(state.auth.token!);
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});

export const loginOutThunk = createAsyncThunk<
  void,
  void,
  { rejectValue: ApiError }
>('auth/loginOut', async (_, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;
    setTokenApi(state.auth.token!);
    await loginOutApi();
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});
