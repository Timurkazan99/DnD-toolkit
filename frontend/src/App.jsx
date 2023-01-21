import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import Navbar from "./components/NavBar.jsx";
import "./styles/comon.scss";
import ContextProvider from "./components/ContextProvider.jsx";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
