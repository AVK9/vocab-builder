import { RootState } from '../store';

export const isAuthSelector = (state: RootState): string | null =>
  state.auth.token;
export const profileSelector = (state: RootState): any | null =>
  state.auth.profile;
export const loadingSelector = (state: RootState): boolean =>
  state.auth.isLoading;
