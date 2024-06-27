import React from 'react';

import { Button } from 'components/common/Button';
import Logo from 'components/common/Logo';

const App: React.FC = () => {
  return (
    <div>
      <Button>Register</Button>
      <Button add>Add</Button>
      <Button cansel>Cansel</Button>
      <Button cansel1>Cansel</Button>
      <Logo />
    </div>
  );
};

export default App;
