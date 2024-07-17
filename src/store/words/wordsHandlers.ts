import { PayloadAction } from '@reduxjs/toolkit';
import {
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

// export const handleDelContact = (state, { payload }) => {
//   const item = state.contacts.findIndex(index => index.id === payload.id);
//   state.contacts.splice(item, 1);
// };
