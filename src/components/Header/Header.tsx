import Logo from 'components/common/Logo';
import UserBar from 'components/common/UserBar';
import UserNav from 'components/common/UserNav';
import { AuthBox, Box } from './Header.styled';
import { isAuthSelector } from 'store/auth/selectors';
import { useSelector } from 'react-redux';

const Header = () => {
  const token = useSelector(isAuthSelector);

  return (
    <Box>
      <Logo />
      {token && (
        <>
          <AuthBox>
            <UserNav />
          </AuthBox>
          <UserBar />
        </>
      )}
    </Box>
  );
};

export default Header;
