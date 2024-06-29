import styled from 'styled-components';
import Logo from 'components/common/Logo';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from 'utils/const';

const HomeBox = styled.div`
  background-color: var(--green);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  const user = true;

  const navigate = useNavigate();

  setTimeout(() => {
    if (user) {
      navigate(LOGIN_ROUTE);
    }
  }, 1000);

  return (
    <HomeBox>
      <Logo color={'white'} />
    </HomeBox>
  );
};

export default HomePage;
