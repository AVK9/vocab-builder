import { api } from './api';

interface SignUpBody {
  name: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  email: string;
  name: string;
  token: string;
}

export const setTokenApi = (token: string): void => {
  api.defaults.headers.common['Authorization'] = token;
};

export const signUpApi = async (body: SignUpBody): Promise<SignUpResponse> => {
  const { data } = await api.post<SignUpResponse>('/users/signup', body);
  console.log('data', data);
  return data;
};

interface SignInBody {
  name: string;
  email: string;
}

export const loginApi = async (body: SignInBody): Promise<SignUpResponse> => {
  const { data } = await api.post<SignUpResponse>('/users/signin', body);
  return data;
};

interface RefreshApiResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
}

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

interface LoginOutApiResponse {
  message: string;
}

export const loginOutApi = async (): Promise<void> => {
  await api.post<LoginOutApiResponse>('/users/signout');
};
