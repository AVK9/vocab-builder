import { createSlice } from '@reduxjs/toolkit';

import {
  addWordOwnThunk,
  delWordsOwnThunk,
  editWordsOwnThunk,
  getWordsAllThunk,
  getWordsCategoriesThunk,
  getWordsOwnThunk,
  getWordsStatisticsThunk,
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
  handleWordsStatistics,
} from './wordsHandlers';

const initialState: WordsState = {
  categories: [],
  totalCount: 0,
  wordsAll: {
    results: [],
    sumResults: [],
    totalPages: 0,
    page: 0,
    perPage: 0,
  },
  wordsOwn: {
    results: [],
    sumResults: [],
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
      .addCase(getWordsStatisticsThunk.fulfilled, handleWordsStatistics)
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
