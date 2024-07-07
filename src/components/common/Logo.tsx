import React from 'react';
import styled from 'styled-components';
import { MyLogo } from './LogoImg';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from './../../utils/const';

interface StyledLogoProps {
  color?: string;
  children?: React.ReactNode;
}

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .custom-logo {
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 40px;
      height: 40px;
    }
  }
`;
const LogoName = styled.p<StyledLogoProps>`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
  color: ${props => props.color || 'var(--black)'};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 22px;
    line-height: 145%;
  }
`;

const Logo: React.FC<StyledLogoProps> = props => {
  return (
    <Link to={HOME_ROUTE}>
      <LogoBox>
        <MyLogo {...props} className="custom-logo" />
        <LogoName {...props}>VocabBuilder</LogoName>
      </LogoBox>
    </Link>
  );
};

export default Logo;
