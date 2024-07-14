import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { profileSelector } from 'store/auth/selectors';
import { IconSvg } from 'components/common/IconSvg';

const BoxUserBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Name = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  color: var(--white);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
  }
`;
export const UserAvatar = styled.div`
  margin-right: 30px;
  border-radius: 30px;
  width: 36px;
  height: 36px;
  background: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Nav = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface UserBarProps {
  onClose: () => void;
}

const UserBar: React.FC<UserBarProps> = ({ onClose }) => {
  const profile = useSelector(profileSelector);

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
    <BoxUserBar>
      {profile && <Name>{userName(profile)}</Name>}
      <UserAvatar>
        <IconSvg icon="user" fill="var(--green)" size="20px" />
      </UserAvatar>

      <Nav type="button" onClick={onClose}>
        <IconSvg icon="x" stroke="var(--white)" tablet="true" />
      </Nav>
    </BoxUserBar>
  );
};

export default UserBar;
