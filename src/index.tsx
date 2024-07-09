import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Global, theme } from './assets/styles';
import { ThemeProvider } from 'styled-components';
import '../src/assets/styles/styles.scss';
import { Provider } from 'react-redux';
import { persistor, store } from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoaderPercent } from 'components/Loader/LoaderPercent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={<LoaderPercent />} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Global />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
