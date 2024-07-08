import img from '../../assets/img/illustration.svg';
import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import BulletList from 'components/common/BulletList';
import {
  Box,
  BulletListBox,
  Images,
  Decorite,
  ImageBig,
  Phone,
  BulletListMob,
} from './LoginPage.styled';

const LoginPage: React.FC = () => {
  return (
    <Phone>
      <Box>
        <Images src={img} alt="study-picture" />

        <BulletListMob>
          <BulletList />
        </BulletListMob>
        <LoginForm />
        <BulletListBox>
          <ImageBig src={img} alt="study-picture" />
          <BulletList />
          <Decorite />
        </BulletListBox>
      </Box>
    </Phone>
  );
};

export default LoginPage;
