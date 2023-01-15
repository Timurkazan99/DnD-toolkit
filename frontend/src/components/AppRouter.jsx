import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from '../routes';
import { BATTLE_ROUTE } from '../utils/const.js';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component />}
          exact
        />))}
      <Route path="*" element={<Navigate to={BATTLE_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;