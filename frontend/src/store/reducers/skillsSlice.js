import { createSlice } from '@reduxjs/toolkit';
import { updateAbility } from './abilitiesSlice';

const initialState = {
  "acrobatics": {
    title: 'acrobatics',
    baseState: "dexterity",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "investigation": {
    title: 'investigation',
    baseState: "intelligence",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "athletics": {
    title: 'athletics',
    baseState: "strength",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "perception": {
    title: 'perception',
    baseState: "wisdom",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "survival": {
    title: 'survival',
    baseState: "wisdom",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "performance": {
    title: 'performance',
    baseState: "charisma",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "intimidation": {
    title: 'intimidation',
    baseState: "charisma",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "history": {
    title: 'history',
    baseState: "intelligence",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "sleightOfHand": {
    title: 'sleightOfHand',
    baseState: "dexterity",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "arcana": {
    title: 'arcana',
    baseState: "intelligence",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "medicine": {
    title: 'medicine',
    baseState: "wisdom",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "deception": {
    title: 'deception',
    baseState: "charisma",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "nature": {
    title: 'nature',
    baseState: "dexterity",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "insight": {
    title: 'insight',
    baseState: "wisdom",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "religion": {
    title: 'religion',
    baseState: "intelligence",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "stealth": {
    title: 'stealth',
    baseState: "dexterity",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "persuasion": {
    title: 'persuasion',
    baseState: "charisma ",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
  "animalHandling": {
    title: 'animalHandling',
    baseState: "wisdom",
    score: 0,
    modifier: 0,
    isProf: 0,
    newScore: 0
  },
};

export const skillSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    updateSkill: (state, action) => {
      const {name, update} = action.payload;
      state[name] = {...state[name], update};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updateAbility, (state, {payload: {score, title}}) => {
      console.log(state);
    })
  }
});

export const { updateSkill } = skillSlice.actions;
export const { reducer } = skillSlice;