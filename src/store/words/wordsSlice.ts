import { createSlice } from '@reduxjs/toolkit';

import { getWordsCategoriesThunk } from './wordsThunk';
import { WordsState } from './wordsTypes';

import {
  handleFulfilled,
  handleGetWords,
  handlePending,
  handleRejected,
} from './wordsHandlers';

const initialState: WordsState = {
  categories: [],
  isLoading: false,
  error: null,
};
const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWordsCategoriesThunk.fulfilled, handleGetWords)
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
