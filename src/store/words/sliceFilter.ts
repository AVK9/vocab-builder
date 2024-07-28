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
      state.catigories = payload;
      console.log('state.catigories', payload);
    },
  },
});

export const { filterWordAction } = filterSlice.actions;
export const { catigoriesWordAction } = filterSlice.actions;

export const filterReduser = filterSlice.reducer;
