import styled from 'styled-components';

export const FormBox = styled.div`
  padding: 32px 16px 57px 16px;
  border-radius: 25px 25px 0 0;
  height: 549px;
  width: 100%;
  max-width: 320px;
  background: rgba(133, 170, 159, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileX}) {
    max-width: 425px;
    /* background-color: red; */
  }
  @media (min-width: calc(${({ theme }) => theme.breakpoints.mobileX} + 1px)) {
    max-width: 627px;
    margin-top: 140px;
    /* background-color: #2bff00; */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 140px;
    padding: 48px 64px;
    border-radius: 30px;
    max-width: 627px;
    height: 591px;
    /* background-color: #342abb; */
  }
`;
export const InputBox = styled.div`
  position: relative;
`;
export const InfoInput = styled.div``;
export const IconBox = styled.div`
  position: absolute;
  right: 18px;
  top: 16px;
`;
