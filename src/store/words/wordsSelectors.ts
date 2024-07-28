import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export const selectStateWordsCategories = (state: RootState) =>
  state.words.categories;
export const selectLoading = (state: RootState) => state.words.isLoading;
export const selectError = (state: RootState) => state.words.error;
export const selectWordsAll = (state: RootState) => state.words.wordsAll;
export const selectWordsOwn = (state: RootState) => state.words.wordsOwn;
export const selectTotalCount = (state: RootState) => state.words.totalCount;
export const selectFilter = (state: RootState) => state.search.search;
export const selectCatigories = (state: RootState) => state.search.catigories;

export const selectSearchWords = createSelector(
  [selectWordsOwn, selectFilter],
  (sumResults, search) => {
    const sumResultsRes = sumResults.sumResults || [];
    return search.length > 0
      ? sumResultsRes.filter(item =>
          item.en.toLowerCase().includes(search.toLowerCase())
        )
      : sumResults.results;
  }
);
export const selectCatigoriesWords = createSelector(
  [selectSearchWords, selectCatigories],
  (sumResults, search) => {
    if (search === 'Regular') {
      return search.length > 0
        ? sumResults.filter(item => item.isIrregular === true)
        : sumResults;
    }
    if (search === 'Irregular') {
      return search.length > 0
        ? sumResults.filter(item => item.isIrregular === false)
        : sumResults;
    }
    if (search === 'categories') {
      return sumResults;
    } else {
      return search.length > 0
        ? sumResults.filter(item => item.category.includes(search))
        : sumResults;
    }
  }
);
