import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as abilitiesSlice } from './reducers/AbilitiesSlice';
import { reducer as uiSlice } from './reducers/UiSlice';
import { reducer as cardSlice } from './reducers/CardSlice';
import { reducer as creatureSlice } from './reducers/CreatureSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['ui'],
};

const rootReducer = combineReducers({
  abilities: abilitiesSlice,
  ui: uiSlice,
  cards: cardSlice,
  creatures: creatureSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export default store;
