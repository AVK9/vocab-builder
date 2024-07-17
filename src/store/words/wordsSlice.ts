import { createSlice } from '@reduxjs/toolkit';

import {
  addWordOwnThunk,
  delWordsOwnThunk,
  editWordsOwnThunk,
  getWordsAllThunk,
  getWordsCategoriesThunk,
  getWordsOwnThunk,
} from './wordsThunk';
import { WordsState, getWordsResponse } from './wordsTypes';

import {
  handleFulfilled,
  handleGetWordsCategories,
  handleGetWordsAll,
  handlePending,
  handleRejected,
  handleGetWordsOwn,
  handleAddWordOwn,
  handleDelWordsOwn,
  handleEditWordsOwn,
} from './wordsHandlers';

const initialState: WordsState = {
  categories: [],
  wordsAll: {
    results: [],
    totalPages: 0,
    page: 0,
    perPage: 0,
  },
  wordsOwn: {
    results: [],
    totalPages: 0,
    page: 0,
    perPage: 0,
  },
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
      .addCase(addWordOwnThunk.fulfilled, handleAddWordOwn)
      .addCase(delWordsOwnThunk.fulfilled, handleDelWordsOwn)
      .addCase(editWordsOwnThunk.fulfilled, handleEditWordsOwn)
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
