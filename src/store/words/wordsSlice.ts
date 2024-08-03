import { createSlice } from '@reduxjs/toolkit';

import {
  addWordOwnThunk,
  answersWordsThunk,
  createWordThunk,
  delWordsOwnThunk,
  editWordsOwnThunk,
  getWordsAllThunk,
  getWordsCategoriesThunk,
  getWordsOwnThunk,
  getWordsStatisticsThunk,
  getWordsTasksThunk,
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
  handleCreateWord,
  handleWordsTasks,
  handleAnswersWords,
} from './wordsHandlers';

const initialState: WordsState = {
  categories: [],
  totalCount: 0,
  wordsTasks: [],
  wordsAnswers: [],
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
      .addCase(createWordThunk.fulfilled, handleCreateWord)
      .addCase(getWordsTasksThunk.fulfilled, handleWordsTasks)
      .addCase(answersWordsThunk.fulfilled, handleAnswersWords)
      .addMatcher(({ type }) => type.endsWith('/pendihg'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const wordsReduser = wordsSlice.reducer;
