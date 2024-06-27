import React from 'react';
import logo from '../../assets/img/logo.svg';
import styled from 'styled-components';

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const LogoName = styled.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
  color: var(--black);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 22px;
    line-height: 145%;
  }
`;
const LogoImg = styled.img`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 40px;
    height: 40px;
  }
`;

const Logo = () => {
  return (
    <LogoBox>
      <LogoImg src={logo} alt="logo" />
      <LogoName>VocabBuilder</LogoName>
    </LogoBox>
  );
};

export default Logo;
