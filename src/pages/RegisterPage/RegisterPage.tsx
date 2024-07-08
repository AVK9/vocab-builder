import img from '../../assets/img/illustration.svg';
import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import BulletList from 'components/common/BulletList';
import {
  Bgr,
  Box,
  BoxBack,
  BulletListBox,
  ContentBox,
  Decorite,
  ImageBig,
  Images,
  Phone,
  Triug,
} from './RegisterPage.styled';
import decorImg from '../../assets/img/vector.svg';

const RegisterPage: React.FC = () => {
  return (
    // <Phone>
    <Box>
      <Images src={img} alt="study-picture" />
      <RegisterForm />
      <BulletListBox>
        <ImageBig src={img} alt="study-picture" />
        <BulletList />
        <Decorite />
        {/* <Bgr src={decorImg} alt="decor" /> */}
        {/* <BoxBack>
          <Triug />
        </BoxBack> */}
      </BulletListBox>
    </Box>
    // </Phone>
  );
};

export default RegisterPage;
