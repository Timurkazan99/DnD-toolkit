import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalName: '',
    throwHistory: [],
};

/* eslint-disable no-param-reassign */
export const UiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onShow: (state, {payload}) => {
            state.modalName = payload;
        },
        onHide: (state) => {
            state.modalName = '';
        },
        addThrow: (state, {payload}) => {
            state.throwHistory.push(payload);
        },
    }
});
/* eslint-enable no-param-reassign */

export const {
    onShow, onHide, addThrow,
} = UiSlice.actions;
export const { reducer } = UiSlice;
