import img from '../../assets/img/illustration.svg';
import React from 'react';
import styled from 'styled-components';
import LoginForm from 'components/LoginForm/LoginForm';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Images = styled.img`
  max-width: 247px;
`;

const LoginPage: React.FC = () => {
  return (
    <Box>
      <Images src={img} alt="study" />
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
