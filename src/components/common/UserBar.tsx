import React, { useState } from 'react';
import styled from 'styled-components';

import { IconSvg } from './IconSvg';
import { useSelector } from 'react-redux';
import { profileSelector } from 'store/auth/selectors';
import { useDispatch } from 'react-redux';
import { loginOutThunk } from 'store/auth/authThunk';
import { AppDispatch } from 'store/store';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from 'utils/const';
import { createPortal } from 'react-dom';
import MenuMob from 'components/Header/MenuMob/MenuMob';

const BoxUserBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 16px;
  }
`;
export const UserAvatar = styled.div`
  border-radius: 30px;
  width: 36px;
  height: 36px;
  background: var(--green);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--primary);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 48px;
    height: 48px;
  }
`;

const Nav = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 12px;
  }
`;

const Button = styled.button`
  margin-left: 16px;
  display: flex;
  gap: 6px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
  width: 81 px;
  height: 24px;
  transition: all ${({ theme }) => theme.animation.cubicBezier};
  &:hover {
    color: var(--black);
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.laptop} - 1px)) {
    display: none;
  }
`;
const Name = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
  }
`;

const UserBar: React.FC = () => {
  const profile = useSelector(profileSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(loginOutThunk());
    navigate(HOME_ROUTE);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalRoot = document.getElementById('modal-root');

  const userName = (profile: { name: string }): string => {
    if (profile.name.length < 6) {
      return profile.name;
    }
    return profile.name.slice(0, 6) + '...';
  };

  if (!modalRoot) {
    console.error('modal-root element not found');
    return null;
  }

  return (
    <>
      <BoxUserBar>
        {profile && <Name>{userName(profile)}</Name>}
        <UserAvatar>
          <IconSvg icon="user" fill="white" />
        </UserAvatar>
        <Button type="button" onClick={handleLogout}>
          Log out
          <IconSvg icon="arrow-right" stroke="black" />
        </Button>

        <Nav type="button" onClick={openModal}>
          <IconSvg icon="nav" stroke="black" tablet="true" />
        </Nav>
      </BoxUserBar>
      {createPortal(
        <MenuMob isOpen={isOpen} onClose={closeModal} />,
        modalRoot
      )}
    </>
  );
};

export default UserBar;
