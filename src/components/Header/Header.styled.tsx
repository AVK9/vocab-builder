import styled from 'styled-components';

export const Box = styled.div`
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px 32px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 1440px;
    padding: 20px 100px;
  }
`;
export const AuthBox = styled.div`
  @media (max-width: calc(${({ theme }) => theme.breakpoints.laptop} - 1px)) {
    display: none;
  }
`;
