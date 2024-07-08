import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`;

export const Images = styled.img`
  max-width: 247px;
`;

export const BulletListBox = styled.div`
  margin-top: 16px;
  margin-bottom: 43px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    /* display: none; */
  }
`;
