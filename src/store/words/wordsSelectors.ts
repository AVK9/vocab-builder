import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export const selectStateWordsCategories = (state: RootState) =>
  state.words.categories;
export const selectLoading = (state: RootState) => state.words.isLoading;
export const selectError = (state: RootState) => state.words.error;
export const selectWordsAll = (state: RootState) => state.words.wordsAll;
export const selectWordsOwn = (state: RootState) => state.words.wordsOwn;
export const selectTotalCount = (state: RootState) => state.words.totalCount;
// export const selectFilter = (state) => state.filter.filter

// export const selectVisibleContacts = createSelector(
// [ selectStateContacts, selectFilter],
//     (contacts, filter) => {

//          return filter.length > 0
//       ?  contacts.filter(contact =>
//             contact.name.toLowerCase()
//               .includes(filter.toLowerCase()))
//              : contacts;
//  }
// )
