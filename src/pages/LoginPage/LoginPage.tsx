import img from '../../assets/img/illustration.svg';
import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import BulletList from 'components/common/BulletList';
import { Box, BulletListBox, Images } from './LoginPage.styled';

const LoginPage: React.FC = () => {
  return (
    <Box>
      <Images src={img} alt="study" />
      <BulletListBox>
        <BulletList />
      </BulletListBox>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
