import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { RoutesPath } from './Routepath';
import { CssBaseline, GlobalStyles } from '@mui/material';

export const RouterManager = () => {
  const route = useMemo(() => 
    Object.keys(RoutesPath).map((path) => {
      const RouteComponent = RoutesPath[path];
      return (
        <Route key={path} path={path} element={<RouteComponent />} />
      );
    }),
    []
  );

  return (
    <>
      <CssBaseline />
      <GlobalStyles tyles={{ body: { margin: 0, padding: 0 }, htsml: { margin: 0, padding: 0 } }} />
      <BrowserRouter>
        <Routes>
          {route}
        </Routes>
      </BrowserRouter>
    </>
  );
}
