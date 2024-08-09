import React from 'react';
import { AppRouter } from 'components/common/AppRouter';
import { ModalProvider } from 'components/ModalWin/ModalContext';
import ModalWin from 'components/ModalWin/ModalWin';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <AppRouter />
      <ModalWin />
    </ModalProvider>
  );
};

export default App;
