import { PayloadAction } from '@reduxjs/toolkit';
import {
  AnswersWordsResp,
  CreateWordResp,
  DellWord,
  getWordsAllApiResponse,
  getWordsResponse,
  TotalCountResponse,
  Word,
  WordsState,
  WordsTasksResp,
} from './wordsTypes';

export const handlePending = (state: WordsState) => {
  state.isLoading = true;
  state.error = '';
};
export const handleFulfilled = (state: WordsState) => {
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (
  state: WordsState,
  action: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleGetWordsCategories = (
  state: WordsState,
  action: PayloadAction<string[]>
) => {
  state.categories = action.payload;
};

export const handleGetWordsAll = (
  state: WordsState,
  action: PayloadAction<getWordsAllApiResponse>
) => {
  state.wordsAll = action.payload;
};

export const handleGetWordsOwn = (
  state: WordsState,
  action: PayloadAction<getWordsResponse>
) => {
  state.wordsOwn.results = action.payload.results;
  state.wordsOwn.totalPages = action.payload.totalPages;
  state.wordsOwn.page = action.payload.page;
  state.wordsOwn.perPage = action.payload.perPage;
};

export const handleDelWordsOwn = (
  state: WordsState,
  action: PayloadAction<DellWord>
) => {
  const item = state.wordsOwn.results.findIndex(
    index => index._id === action.payload.id
  );
  state.wordsOwn.results.splice(item, 1);
  state.totalCount = state.totalCount - 1;
};

export const handleEditWordsOwn = (
  state: WordsState,
  action: PayloadAction<Word>
) => {
  const item = state.wordsOwn.results.findIndex(
    index => index._id === action.payload._id
  );

  state.wordsOwn.results[item] = action.payload;
};
export const handleWordsStatistics = (
  state: WordsState,
  action: PayloadAction<TotalCountResponse>
) => {
  state.totalCount = action.payload.totalCount;
  state.totalCount = state.totalCount + 1;
};

export const handleWordsTasks = (
  state: WordsState,
  action: PayloadAction<WordsTasksResp>
) => {
  state.wordsTasks = action.payload.tasks;
};

export const handleCreateWord = (
  state: WordsState,
  action: PayloadAction<CreateWordResp>
) => {
  state.wordsOwn.results = [...state.wordsOwn.results, action.payload];
  state.totalCount = state.totalCount + 1;
};

export const handleAnswersWords = (
  state: WordsState,
  action: PayloadAction<AnswersWordsResp>
) => {
  state.wordsAnswers = action.payload;
};
export const handleAddWordOwn = (
  state: WordsState,
  action: PayloadAction<Word>
) => {
  state.wordsOwn.results = [...state.wordsOwn.results, action.payload];
  state.totalCount = state.totalCount + 1;
};
