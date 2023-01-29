import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

const abilityAdapter = createEntityAdapter();
const initialState = abilityAdapter.getInitialState({
  active: null,
});

export const AbilitySlice = createSlice({
  name: 'abilities',
  initialState,
  reducers: {
    addAbility: abilityAdapter.addOne,
    removeAbility: abilityAdapter.removeOne,
    updateAbility: abilityAdapter.updateOne,
    setActive: (state, {payload}) => {
      state.active = payload;
    },
  },
});

export const selectors = abilityAdapter.getSelectors((state) => state.abilities);
export const { actions } = AbilitySlice;
export const { reducer } = AbilitySlice;