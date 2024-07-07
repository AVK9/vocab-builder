import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AuthBox = styled.div`
  @media (max-width: calc(${({ theme }) => theme.breakpoints.laptop} - 1px)) {
    display: none;
  }
`;
