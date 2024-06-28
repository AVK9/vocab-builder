import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { DICTIONARY_ROUTE, RECOMMEND_ROUTE } from 'utils/const';
import { TRAINING_ROUTE } from './../../utils/const';

interface NavigationProps {
  colors?: string;
  children?: React.ReactNode;
}

export const Navigation = styled.nav<NavigationProps>`
  width: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;

  transition: color ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.menuM}) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
  &:hover {
    color: var(--primary);
  }
  &.active {
    color: var(--primary);
  }
`;

const UserNav = () => {
  return (
    <>
      <StyledLink to={DICTIONARY_ROUTE}>Dictionary</StyledLink>
      <StyledLink to={RECOMMEND_ROUTE}>Recommend</StyledLink>
      <StyledLink to={TRAINING_ROUTE}>Training</StyledLink>
    </>
  );
};

export default UserNav;
