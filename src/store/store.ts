import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { filterReduser } from './words/sliceFilter';
import { authReduser } from './auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { wordsReduser } from './words/wordsSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReduser = persistReducer(persistConfig, authReduser);

export const store = configureStore({
  reducer: {
    words: wordsReduser,
    search: filterReduser,
    catigories: filterReduser,
    auth: persistedReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
