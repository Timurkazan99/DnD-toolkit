import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as abilitiesSlice } from './reducers/abilitiesSlice';
import { reducer as skillsSlice } from './reducers/skillsSlice';
import { reducer as uiSlice } from './reducers/UiSlice';
import { reducer as cardSlice } from './reducers/CardSlice';
import { reducer as creatureSlice } from './reducers/CreatureSlice';

const rootReducer = combineReducers({
  abilities: abilitiesSlice,
  skills: skillsSlice,
  ui: uiSlice,
  cards: cardSlice,
  creatures: creatureSlice,
});

export default function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}