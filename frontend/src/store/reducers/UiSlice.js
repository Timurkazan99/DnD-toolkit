import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalName: '',
  throwHistory: [],
  scrollHeight: 0,
};

/* eslint-disable no-param-reassign */
export const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onShow: (state, { payload }) => {
      state.modalName = payload;
    },
    onHide: (state) => {
      state.modalName = '';
    },
    addThrow: (state, { payload }) => {
      state.throwHistory.push(payload);
    },
    setScroll: (state, { payload }) => {
      state.scrollHeight = payload;
    },
  },
});
/* eslint-enable no-param-reassign */

export const {
  onShow, onHide, addThrow, setScroll,
} = UiSlice.actions;
export const { reducer } = UiSlice;
