import React, { FC, ReactNode, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { NOTFAUND_ROUTE } from 'utils/const';
import { Layout } from 'components/Layout/Layout';
import { privateRoutes, publicRoutes } from 'utils/routes';

interface RouteProps {
  path: string;
  Component: React.ComponentType;
}

export const AppRouter: FC = () => {
  const user = true;

  const renderRoute = (route: RouteProps): ReactNode => (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Suspense fallback={null}>
          <route.Component />
        </Suspense>
      }
    />
  );

  return (
    <Routes>
      <Route element={<Layout />}>
        {user ? (
          <>
            {privateRoutes.map(renderRoute)}
            <Route
              path="*"
              element={<Navigate to={NOTFAUND_ROUTE} replace />}
            />
          </>
        ) : (
          <>
            {publicRoutes.map(renderRoute)}
            <Route
              path="*"
              element={<Navigate to={NOTFAUND_ROUTE} replace />}
            />
          </>
        )}
      </Route>
    </Routes>
  );
};
