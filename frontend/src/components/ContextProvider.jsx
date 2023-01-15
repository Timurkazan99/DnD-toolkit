import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import setupStore from '../store/index';

const store = setupStore();

function ContextProvider({ children }) {
  return (
      <Provider store={store}>
        {children}
      </Provider>
  );
}

export default ContextProvider;
