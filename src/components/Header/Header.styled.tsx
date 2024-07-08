import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AuthBox = styled.div`
  @media (max-width: calc(${({ theme }) => theme.breakpoints.laptop} - 1px)) {
    display: none;
  }
`;
