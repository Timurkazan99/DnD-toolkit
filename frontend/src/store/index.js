import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as abilitiesSlice } from './reducers/abilitiesSlice';
import { reducer as skillsSlice } from './reducers/skillsSlice';

const rootReducer = combineReducers({
  abilities: abilitiesSlice,
  skills: skillsSlice,
});

export default function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}