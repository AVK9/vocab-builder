import { createSlice } from '@reduxjs/toolkit';

import {
  getWordsAllThunk,
  getWordsCategoriesThunk,
  getWordsOwnThunk,
} from './wordsThunk';
import { WordsState } from './wordsTypes';

import {
  handleFulfilled,
  handleGetWordsCategories,
  handleGetWordsAll,
  handlePending,
  handleRejected,
  handleGetWordsOwn,
} from './wordsHandlers';

const initialState: WordsState = {
  categories: [],
  wordsAll: [],
  wordsOwn: [],
  isLoading: false,
  error: null,
};
const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWordsCategoriesThunk.fulfilled, handleGetWordsCategories)
      .addCase(getWordsAllThunk.fulfilled, handleGetWordsAll)
      .addCase(getWordsOwnThunk.fulfilled, handleGetWordsOwn)
      //   .addCase(addContactThunk.fulfilled, handleAddContact)
      //   .addCase(delContactThunk.fulfilled, handleDelContact)
      .addMatcher(
        ({ type }): boolean => type.endsWith('/pendihg'),
        handlePending
      )
      .addMatcher(
        ({ type }): boolean => type.endsWith('/fulfilled'),
        handleFulfilled
      )
      .addMatcher(
        ({ type }): boolean => type.endsWith('/rejected'),
        handleRejected
      );
  },
});

export const wordsReduser = wordsSlice.reducer;