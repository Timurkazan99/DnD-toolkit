import {createEntityAdapter, createSlice, current} from "@reduxjs/toolkit";
import {actions as cardActions} from "./CardSlice";

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(cardActions.removeCard, (state, {payload}) => {
        const creatures = Object.values(current(state.entities));
        const creaturesIdsForRemove = [];
        creatures.forEach(({id, enemyId}) => {
          if(enemyId === payload) {
            creaturesIdsForRemove.push(id);
          }
        })
        creatureAdapter.removeMany(state, creaturesIdsForRemove)
      })
  }
});

export const selectors = creatureAdapter.getSelectors((state) => state.creatures);
export const { actions } = creatureSlice;
export const { reducer } = creatureSlice;