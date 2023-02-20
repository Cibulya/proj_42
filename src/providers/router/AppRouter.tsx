import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'providers/routeConfig/routeConfig';
import { CircularProgress } from '@mui/material';

const AppRouter = () => {
  return (
    <Suspense fallback={<CircularProgress className="loading" color="secondary" />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
