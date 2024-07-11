import React, { FC, ReactNode, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { NOTFAUND_ROUTE } from 'utils/const';
import { Layout } from 'components/Layout/Layout';
import { privateRoutes, publicRoutes } from 'utils/routes';
import HomePage from 'pages/HomePage/HomePage';
import { useSelector } from 'react-redux';
import {
  isAuthSelector,
  loadingSelector,
  profileSelector,
} from 'store/auth/selectors';
import { LoaderPercent } from 'components/Loader/LoaderPercent';
import { refreshThunk } from 'store/auth/authThunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';

interface RouteProps {
  path: string;
  Component: React.ComponentType;
}

export const AppRouter: FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const loading = useSelector(loadingSelector);
  const profile = useSelector(profileSelector);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (isAuth && !profile) {
      dispatch(refreshThunk());
    }
  }, [isAuth, profile, dispatch]);

  const renderRoute = (route: RouteProps): ReactNode => (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Suspense fallback={<LoaderPercent />}>
          <route.Component />
        </Suspense>
      }
    />
  );

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<Layout />}>
        {isAuth ? (
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
