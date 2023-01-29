import {createSlice, createEntityAdapter, current} from '@reduxjs/toolkit';
import {actions as creatureActions} from "./CreatureSlice"
import {actions as abilityActions} from "./AbilitiesSlice"
import {rollDice} from "../../utils/diceRoll";

const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState({
    loading: null,
    error: null,
    active: null,
    selected: null,
});

export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: cardsAdapter.addOne,
        removeCard: cardsAdapter.removeOne,
        updateCard: cardsAdapter.updateOne,
        setActive: (state, action) => {
            state.active = action.payload;
        },
        setSelected: (state, action) => {
            state.selected = action.payload;
        },
        throwInitiative: (state) => {
            const cards = Object.values(current(state.entities));
            const updates = cards.map(({id, initiativeBonus}) => {
                return {id, changes: {initiative: rollDice(20) + initiativeBonus}};
            });
            cardsAdapter.updateMany(state, updates)
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(creatureActions.addCreature, (state, {payload}) => {
            const enemy = current(state.entities[payload.enemyId])
            const newCreaturesIds = [...enemy.creaturesIds, payload.id]
            cardsAdapter.updateOne(state, {id: payload.enemyId, changes: {creaturesIds: newCreaturesIds, lastCreatureIndex: enemy.lastCreatureIndex + 1}})
          })
          .addCase(creatureActions.delCreature, (state, {payload}) => {
              const creaturesIds = current(state.entities[payload.enemyId].creaturesIds)
              const newCreaturesIds = creaturesIds.filter(({id}) => id !== payload.id);
              cardsAdapter.updateOne(state, {id: payload.enemyId, changes: {creaturesIds: newCreaturesIds}})
          })
          .addCase(abilityActions.addAbility, (state, {payload}) => {
              const enemy = current(state.entities[payload.enemyId])
              const newAbilitiesIds = [...enemy.abilitiesIds, payload.id]
              cardsAdapter.updateOne(state, {id: payload.enemyId, changes: {abilitiesIds: newAbilitiesIds}})
          })
          .addCase(abilityActions.removeAbility, (state, {payload}) => {
              const abilitiesIds = current(state.entities[payload.enemyId].abilitiesIds)
              const newAbilitiesIds = abilitiesIds.filter(({id}) => id !== payload.id);
              cardsAdapter.updateOne(state, {id: payload.enemyId, changes: {creaturesIds: newAbilitiesIds}})
          })
    }
});

export const selectors = cardsAdapter.getSelectors((state) => state.cards);
export const { actions } = cardSlice;
export const { reducer } = cardSlice;