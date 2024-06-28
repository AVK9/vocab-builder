import { lazy } from 'react';
import {
  DICTIONARY_ROUTE,
  LOGIN_ROUTE,
  NOTFAUND_ROUTE,
  RECOMMEND_ROUTE,
  REGISTER_ROUTE,
  TRAINING_ROUTE,
} from './const';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const DictionaryPage = lazy(
  () => import('pages/DictionaryPage/DictionaryPage')
);
const RecommendPage = lazy(() => import('pages/RecommendPage/RecommendPage'));
const TrainingPage = lazy(() => import('pages/TrainingPage/TrainingPage'));
const NotFaund = lazy(() => import('pages/NotFaund/NotFaund'));

export const publicRoutes = [
  {
    path: REGISTER_ROUTE,
    Component: RegisterPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: NOTFAUND_ROUTE,
    Component: NotFaund,
  },
];

export const privateRoutes = [
  {
    path: DICTIONARY_ROUTE,
    Component: DictionaryPage,
  },
  {
    path: RECOMMEND_ROUTE,
    Component: RecommendPage,
  },
  {
    path: TRAINING_ROUTE,
    Component: TrainingPage,
  },
  {
    path: NOTFAUND_ROUTE,
    Component: NotFaund,
  },
];
