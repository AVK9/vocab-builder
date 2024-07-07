export interface SignUpResponse {
  email: string;
  name: string;
  token: string;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export interface SignInResponse {
  email: string;
  name: string;
  token: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthState {
  isLoading: boolean;
  error: string | null;
  token: string | null;
  profile: {
    name: string;
    email: string;
  } | null;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface ApiError {
  message: string;
}

export interface RefreshApiResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
}

export interface LoginOutApiResponse {
  message: string;
}
