import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import BulletList from 'components/common/BulletList';
import {
  Box,
  BulletListBox,
  Decorite,
  ImageBig,
  Images,
  Phone,
} from './RegisterPage.styled';
import img from '../../assets/img/illustration.svg';

const RegisterPage: React.FC = () => {
  return (
    <Phone>
      <Box>
        <Images src={img} alt="study-picture" />
        <RegisterForm />
        <BulletListBox>
          <ImageBig src={img} alt="study-picture" />
          <BulletList />
          <Decorite />
        </BulletListBox>
      </Box>
    </Phone>
  );
};

export default RegisterPage;
