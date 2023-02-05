import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import store, {persistor} from '../store/index';
import {PersistGate} from 'redux-persist/integration/react'

function ContextProvider({ children }) {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
  );
}

export default ContextProvider;
