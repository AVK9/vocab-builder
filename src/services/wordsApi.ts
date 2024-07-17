import {
  DellWord,
  EditWord,
  getWordsAllApiResponse,
  getWordsAllData,
  getWordsData,
  getWordsResponse,
  Word,
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
export const addWordOwnApi = async (
  token: string,
  id: string
): Promise<Word> => {
  const { data } = await api.post<Word>(
    `/words/add/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const delWordsOwnApi = async (
  token: string,
  id: string
): Promise<DellWord> => {
  const { data } = await api.delete<DellWord>(`/words/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
export const editWordsOwnApi = async (
  token: string,
  reqData: EditWord
): Promise<Word> => {
  const { data } = await api.patch<Word>(`/words/edit/${reqData.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: reqData,
  });

  return data;
};
