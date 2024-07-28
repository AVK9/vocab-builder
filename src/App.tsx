import React from 'react';
import { AppRouter } from 'components/common/AppRouter';
import { LoaderPercent } from 'components/Loader/LoaderPercent';
import { useSelector } from 'react-redux';
import { loadingSelector } from 'store/auth/selectors';
import { ModalProvider } from 'components/ModalWin/ModalContext';
import ModalWin from 'components/ModalWin/ModalWin';

const App: React.FC = () => {
  const loading = useSelector(loadingSelector);

  if (loading) {
    // return <LoaderPercent />;
  }
  return (
    <ModalProvider>
      <AppRouter />
      <ModalWin />
    </ModalProvider>
  );
};

export default App;
