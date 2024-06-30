import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
// import { contactsReduser } from './contacts/contactsSlice';
// import { filterReduser } from './contacts/sliceFilter';
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

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReduser = persistReducer(persistConfig, authReduser);

export const store = configureStore({
  reducer: {
    // contacts: contactsReduser,
    // filter: filterReduser,
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
