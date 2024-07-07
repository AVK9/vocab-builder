import {
  LoginOutApiResponse,
  RefreshApiResponse,
  SignInData,
  SignInResponse,
  SignUpData,
  SignUpResponse,
} from 'store/auth/types';
import { api } from './api';

export const setTokenApi = (token: string): void => {
  api.defaults.headers.common['Authorization'] = token;
};

export const signUpApi = async (body: SignUpData): Promise<SignUpResponse> => {
  const { data } = await api.post<SignUpResponse>('/users/signup', body);
  console.log('data', data);
  return data;
};

export const loginApi = async (body: SignInData): Promise<SignInResponse> => {
  const { data } = await api.post<SignInResponse>('/users/signin', body);
  return data;
};

export const refreshApi = async (
  token: string
): Promise<RefreshApiResponse> => {
  const { data } = await api<RefreshApiResponse>('/users/current', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const loginOutApi = async (token: string): Promise<void> => {
  await api.post<LoginOutApiResponse>(
    '/users/signout',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
