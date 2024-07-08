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
  ImageBig,
  Images,
  Triug,
} from './RegisterPage.styled';
import decorImg from '../../assets/img/vector.svg';
import Back from 'components/common/Back';

const RegisterPage: React.FC = () => {
  return (
    <Back>
      <Box>
        <Images src={img} alt="study-picture" />
        <RegisterForm />
        <BulletListBox>
          <ImageBig src={img} alt="study-picture" />
          <BulletList />
          {/* <Bgr src={decorImg} alt="decor" /> */}
          <BoxBack>
            <Triug />
          </BoxBack>
        </BulletListBox>
      </Box>
    </Back>
  );
};

export default RegisterPage;
