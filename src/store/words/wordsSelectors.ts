import { RootState } from 'store/store';

export const selectStateWordsCategories = (state: RootState) =>
  state.words.categories;
export const selectLoading = (state: RootState) => state.words.isLoading;
export const selectError = (state: RootState) => state.words.error;
export const selectWordsAll = (state: RootState) => state.words.wordsAll;
export const selectWordsOwn = (state: RootState) => state.words.wordsOwn;
export const selectTotalCount = (state: RootState) => state.words.totalCount;
export const selectWordsTasks = (state: RootState) => state.words.wordsTasks;
export const selectWordsAnswers = (state: RootState) =>
  state.words.wordsAnswers;
export const selectFilter = (state: RootState) => state.search.search;
export const selectCatigories = (state: RootState) => state.search.catigories;
