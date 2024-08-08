import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  catigories: '',
};

const filterSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    filterWordAction: (state, { payload }) => {
      state.search = payload;
    },
    catigoriesWordAction: (state, { payload }) => {
      console.log('catigoriesWordAction', payload);
      state.catigories = payload;
    },
  },
});

export const { filterWordAction } = filterSlice.actions;
export const { catigoriesWordAction } = filterSlice.actions;

export const filterReduser = filterSlice.reducer;
