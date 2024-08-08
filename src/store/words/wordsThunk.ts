import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addWordOwnApi,
  answersWordsApi,
  createWordApi,
  delWordsOwnApi,
  editWordsOwnApi,
  getWordsAllApi,
  getWordsCategoriesApi,
  getWordsOwnApi,
  getWordsStatisticsApi,
  getWordsTasksApi,
} from 'services/wordsApi';
import { RootState } from 'store/store';
import {
  AnswersWordsReq,
  AnswersWordsResp,
  ApiError,
  CreateWordReq,
  CreateWordResp,
  DellWord,
  EditWord,
  getWordsAllApiResponse,
  getWordsAllData,
  getWordsData,
  getWordsResponse,
  Word,
} from './wordsTypes';

export const getWordsCategoriesThunk = createAsyncThunk(
  'words/getWordsCategories',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      return await getWordsCategoriesApi(state.auth.token!);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getWordsAllThunk = createAsyncThunk<
  getWordsAllApiResponse,
  getWordsAllData,
  { rejectValue: ApiError }
>('words/getWordsAll', async (body, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;
    return await getWordsAllApi(state.auth.token!, body);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const getWordsOwnThunk = createAsyncThunk<
  getWordsResponse,
  getWordsData,
  { rejectValue: ApiError }
>('words/getWordsOwn', async (body, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;
    return await getWordsOwnApi(state.auth.token!, body);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const addWordOwnThunk = createAsyncThunk<
  Word,
  string,
  { rejectValue: ApiError }
>('words/addWordOwn', async (id: string, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;

    return await addWordOwnApi(state.auth.token!, id);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const delWordsOwnThunk = createAsyncThunk<
  DellWord,
  string,
  { rejectValue: ApiError }
>('words/delWordsOwn', async (id: string, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;

    return await delWordsOwnApi(state.auth.token!, id);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const editWordsOwnThunk = createAsyncThunk<
  Word,
  EditWord,
  { rejectValue: ApiError }
>('words/editWordsOwn', async (body, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;

    return await editWordsOwnApi(state.auth.token!, body);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const getWordsStatisticsThunk = createAsyncThunk(
  'words/getWordsStatistics',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      return await getWordsStatisticsApi(state.auth.token!);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getWordsTasksThunk = createAsyncThunk(
  'words/getWordsTasks',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      return await getWordsTasksApi(state.auth.token!);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createWordThunk = createAsyncThunk<
  CreateWordResp,
  CreateWordReq,
  { rejectValue: ApiError }
>('words/createWord', async (body, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;
    return await createWordApi(state.auth.token!, body);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const answersWordsThunk = createAsyncThunk<
  AnswersWordsResp,
  AnswersWordsReq,
  { rejectValue: ApiError }
>('words/answersWords', async (body, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;
    return await answersWordsApi(state.auth.token!, body);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});
