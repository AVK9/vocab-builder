import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { DICTIONARY_ROUTE, RECOMMEND_ROUTE, TRAINING_ROUTE } from 'utils/const';

export const StyledLink = styled(NavLink)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: var(--black);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;
  height: 43px;
  padding: 12px 28px;

  transition: all ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    color: var(--green);
  }
  &.active {
    background: var(--green);

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    color: var(--white);
    outline: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserNav: React.FC = () => {
  return (
    <Navigation>
      <StyledLink to={DICTIONARY_ROUTE}>Dictionary</StyledLink>
      <StyledLink to={RECOMMEND_ROUTE}>Recommend</StyledLink>
      <StyledLink to={TRAINING_ROUTE}>Training</StyledLink>
    </Navigation>
  );
};

export default UserNav;
