import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  strength: {
    title: 'strength',
    score: 10,
    isProf: false,
    save: null,
    check: 0,
    modifier: 0,
  },
  dexterity: {
    title: 'dexterity',
    score: 10,
    isProf: false,
    save: null,
    check: 0,
    modifier: 0,
  },
  constitution: {
    title: 'constitution',
    score: 10,
    isProf: false,
    save: null,
    check: 0,
    modifier: 0,
  },
  wisdom: {
    title: 'wisdom',
    score: 10,
    isProf: false,
    save: null,
    check: 0,
    modifier: 0,
  },
  intelligence: {
    title: 'intelligence',
    score: 10,
    isProf: false,
    save: null,
    check: 0,
    modifier: 0,
  },
  charisma: {
    title: 'charisma',
    score: 10,
    isProf: false,
    save: null,
    check: 0,
    modifier: 0,
  }
};

export const abilitiesSlice = createSlice({
  name: 'abilities',
  initialState,
  reducers: {
    updateAbility: (state, action) => {
      const {name, update} = action.payload;
      const newValue = {...state[name], update};
      newValue.check = Math.floor((newValue.score - 10) / 2)
      state[name] = newValue;
    }
  }
});

export const { updateAbility } = abilitiesSlice.actions;
export const { reducer } = abilitiesSlice;