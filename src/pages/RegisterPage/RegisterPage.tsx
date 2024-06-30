import img from '../../assets/img/illustration.svg';
import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Images = styled.img`
  max-width: 247px;
`;

const RegisterPage: React.FC = () => {
  // const apiUrl = {
  //   name: 'TestName',
  //   email: 'dasdss@gmail.com',
  //   password: 'testtt1',
  // };

  // signUpApi(apiUrl);

  return (
    <Box>
      <Images src={img} alt="study" />
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
