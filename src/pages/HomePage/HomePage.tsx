import styled from 'styled-components';
import Logo from 'components/common/Logo';
import { useNavigate } from 'react-router-dom';
import { DICTIONARY_ROUTE, LOGIN_ROUTE } from 'utils/const';
import { useSelector } from 'react-redux';
import { isAuthSelector } from 'store/auth/selectors';

const HomeBox = styled.div`
  background-color: var(--green);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  const token = useSelector(isAuthSelector);

  const navigate = useNavigate();

  setTimeout(() => {
    if (!token) {
      navigate(LOGIN_ROUTE);
    } else {
      navigate(DICTIONARY_ROUTE);
    }
  }, 1000);

  return (
    <HomeBox>
      <Logo color={'white'} />
    </HomeBox>
  );
};

export default HomePage;
