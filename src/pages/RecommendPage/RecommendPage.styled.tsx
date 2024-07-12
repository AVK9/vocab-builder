import styled from 'styled-components';

export const RecommendPageBox = styled.div`
  margin: 0 auto;
  padding: 32px 16px;
  max-width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 28px 32px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 28px 100px;
  }
`;
