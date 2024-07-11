import {
  getWordsAllApiResponse,
  getWordsAllData,
  getWordsData,
  getWordsResponse,
} from 'store/words/wordsTypes';
import { api } from './api';

export const setTokenApi = (token: string): void => {
  api.defaults.headers.common['Authorization'] = token;
};

export const getWordsCategoriesApi = async (
  token: string
): Promise<string[]> => {
  const { data } = await api<string[]>('/words/categories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getWordsAllApi = async (
  token: string,
  reqData: getWordsAllData
): Promise<getWordsAllApiResponse> => {
  const { data } = await api.get<getWordsAllApiResponse>('/words/all', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: reqData,
  });
  return data;
};
export const getWordsOwnApi = async (
  token: string,
  reqData: getWordsData
): Promise<getWordsResponse> => {
  const { data } = await api.get<getWordsResponse>('/words/own', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: reqData,
  });
  return data;
};

// export const delContactApi = async delId => {
//   const { data } = await api.delete(`/contacts/${delId}`);
//   return data;
// };
