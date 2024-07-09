import { createAsyncThunk } from '@reduxjs/toolkit';
import { setTokenApi } from 'services/authApi';
import { getWordsCategoriesApi } from 'services/wordsApi';
import { RootState } from 'store/store';

export const getWordsCategoriesThunk = createAsyncThunk(
  'words/getWords',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      return await getWordsCategoriesApi(state.auth.token!);
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

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
