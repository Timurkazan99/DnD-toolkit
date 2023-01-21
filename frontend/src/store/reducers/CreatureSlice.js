import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const creatureAdapter = createEntityAdapter();
const initialState = creatureAdapter.getInitialState();

export const creatureSlice = createSlice({
  name: 'creatures',
  initialState,
  reducers: {
    addCreature: creatureAdapter.addOne,
    delCreature: (state, {payload}) => {
      creatureAdapter.removeOne(state, payload.id)
    },
  }
});

export const selectors = creatureAdapter.getSelectors((state) => state.creatures);
export const { actions } = creatureSlice;
export const { reducer } = creatureSlice;