import { IconSvg } from 'components/common/IconSvg';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { DICTIONARY_ROUTE, RECOMMEND_ROUTE, TRAINING_ROUTE } from 'utils/const';

export const Navigation = styled.nav`
  margin-top: 166px;
  display: flex;
  gap: 28px;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledLink = styled(NavLink)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: var(--white);

  cursor: pointer;

  transition: all ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    color: var(--black);
  }
  &.active {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 15px;
    padding: 12px 20px;
    width: 110px;
    height: 43px;
    background: var(--white);
    color: var(--black);
    outline: none;
  }
`;
export const BtnLogOut = styled.button`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: var(--white);

  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  outline: none;

  transition: all ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    color: var(--black);

    svg {
      transition: all ${({ theme }) => theme.animation.cubicBezier},
        box-shadow ${({ theme }) => theme.animation.cubicBezier};
      stroke: var(--black);
    }
  }
`;

const StyledIconSvg = styled(IconSvg)`
  padding-top: 2px;
  stroke: var(--white);
  width: 16px;
  height: 16px;
`;

const UserNav: React.FC = () => {
  return (
    <Navigation>
      <StyledLink to={DICTIONARY_ROUTE}>Dictionary</StyledLink>
      <StyledLink to={RECOMMEND_ROUTE}>Recommend</StyledLink>
      <StyledLink to={TRAINING_ROUTE}>Training</StyledLink>
      <BtnLogOut>
        Log out
        <StyledIconSvg icon="arrow-right" />
      </BtnLogOut>
    </Navigation>
  );
};

export default UserNav;
