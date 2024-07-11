import { createAsyncThunk } from '@reduxjs/toolkit';
import { setTokenApi } from 'services/authApi';
import {
  getWordsAllApi,
  getWordsCategoriesApi,
  getWordsOwnApi,
} from 'services/wordsApi';
import { RootState } from 'store/store';
import {
  ApiError,
  getWordsAllApiResponse,
  getWordsAllData,
  getWordsData,
  getWordsResponse,
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

// export const addContactThunk = createAsyncThunk(
//   'contacts/addContacts',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const data = await addContactApi(contact);

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.error);
//     }
//   }
// );

// export const delContactThunk = createAsyncThunk(
//   'contacts/delContacts',
//   async (delId, { rejectWithValue }) => {
//     try {
//       const data = await delContactApi(delId);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.error);
//     }
//   }
// );
