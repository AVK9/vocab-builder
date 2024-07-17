import { PayloadAction } from '@reduxjs/toolkit';
import {
  DellWord,
  EditWord,
  getWordsAllApiResponse,
  getWordsResponse,
  Word,
  WordsState,
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
  console.log('handleGetWords :>> ', action.payload);
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
  state.wordsOwn = action.payload;
};

export const handleAddWordOwn = (
  state: WordsState,
  action: PayloadAction<Word>
) => {
  state.wordsOwn.results = [...state.wordsOwn.results, action.payload];
};

export const handleDelWordsOwn = (
  state: WordsState,
  action: PayloadAction<DellWord>
) => {
  const item = state.wordsOwn.results.findIndex(
    index => index._id === action.payload.id
  );
  state.wordsOwn.results.splice(item, 1);
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
