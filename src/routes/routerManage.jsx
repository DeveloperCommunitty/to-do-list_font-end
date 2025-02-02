import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { RoutesPath, AdminRoutesPath, PrivateRoutesPath } from './Routepath';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { PrivateRoute } from './Privaterouter';

export const RouterManager = () => {

  const Publicroute = useMemo(() =>
    Object.keys(RoutesPath).map((path) => {
      const RouterComponent = RoutesPath[path];
      return (
        <Route
          key={path}
          path={path}
          element={<RouterComponent />}
        />
      )
    }),
    []
  );

  const Privateroutes = useMemo(() =>
    Object.keys(PrivateRoutesPath).map((path) => {
      const RouterComponent = PrivateRoutesPath[path];
      return (
        <Route
          key={path}
          element={<PrivateRoute requiredRole={["USER"]} />}>
          <Route path={path}
            element={<RouterComponent />} />
        </Route>
      )
    }),
    []
  );

  const Adminroutes = useMemo(() =>
    Object.keys(AdminRoutesPath).map((path) => {
      const RouterComponent = AdminRoutesPath[path];
      return (
        <Route
          key={path}
          element={<PrivateRoute requiredRole={["ADMIN"]} />}>
          <Route path={path}
            element={<RouterComponent />} />
        </Route>
      )
    }),
    []
  );

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 }, html: { margin: 0, padding: 0 } }} />
      <BrowserRouter>
        <Routes>
          {Publicroute}
          {Privateroutes}
          {Adminroutes}
        </Routes>
      </BrowserRouter>
    </>
  );
}
