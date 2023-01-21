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
        <div className="h-100">
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
