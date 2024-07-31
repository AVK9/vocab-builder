import styled from 'styled-components';

export const ContentBox = styled.div`
  margin-top: 32px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0px;
  }
`;
export const HeadPopup = styled.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: var(--white);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 40px;
    line-height: 120%;
  }
`;
export const Content = styled.p`
  margin: 16px 0px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(252, 252, 252, 0.8);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
  }
`;
export const SelectedBox = styled.div`
  position: relative;
`;
export const InfoText = styled.div`
  position: absolute;
  bottom: -27px;
  left: 0;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  color: var(--white);

  @media (min-width: calc(${({ theme }) => theme.breakpoints.mobileX} - 41px)) {
    bottom: -20px;
  }
`;
export const FormBox = styled.div`
  /* background-color: red; */
  width: 100%;
`;

export const NameBox = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
export const Name = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: var(--white);
  line-height: 28px;
`;

export const ButtonBox = styled.div`
  max-width: 310px;

  display: flex;
  gap: 8px;
`;
export const EditWordContentBox = styled.div`
  margin-top: 32px;
`;

export const Input = styled.input<{ errorField?: boolean }>`
  outline: none;
  /* border: 1px solid #d1d5db; */
  border: 1px solid ${props => (props.errorField ? '#d80027' : '#d1d5db')};
  border-radius: 15px;
  padding: 12px 24px 12px 24px;
  width: 100%;
  height: 48px;
  margin-bottom: 16px;
  background-color: transparent;

  &.error {
    border: 1px solid #d80027;
  }

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--white);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 334px;
  }
`;
export const InputBox = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 8px;
  }
`;
