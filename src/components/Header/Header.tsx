import Logo from 'components/common/Logo';
import UserNav from 'components/common/UserNav';
import styled from 'styled-components';

const Box = styled.div`
  padding: 16px 16px 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  return (
    <Box>
      <div>
        <Logo />
        <UserNav />
      </div>
    </Box>
  );
};

export default Header;
