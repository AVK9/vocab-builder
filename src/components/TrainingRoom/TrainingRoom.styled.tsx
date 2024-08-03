import styled from 'styled-components';

export const TrainingRoomBox = styled.div`
  padding: 24px 16px 76px 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto;
    padding: 62px 32px 104px 32px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 62px 0px 0px 0px;
    width: 1240px;
  }
`;
export const ProgressBarBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;
export const ProgressBar = styled.div`
  position: relative;
  min-width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const VidgetBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
export const Persent = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 80%;
  text-align: center;
  color: var(--black);
`;

export const TrainingBox = styled.div`
  margin-top: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 15px;
    padding: 18px;
    background: #fff;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 16px;
    display: flex;
  }
`;
export const UaTrainingBox = styled.div`
  position: relative;
  border-bottom: 1px solid #dbdbdb;
  border-radius: 8px 8px 0 0;
  padding: 22px;
  width: 100%;
  height: 195px;
  background: var(--white);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 282px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    border-right: 1px solid #dbdbdb;
    border-radius: 8px 0 0 0;
    width: 602px;
    height: 302px;
  }
`;
export const EnTrainingBox = styled.div`
  position: relative;
  border-radius: 0 0 8px 8px;
  padding: 22px;
  width: 100%;
  height: 195px;
  background: var(--white);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 282px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    border: 0px solid #dbdbdb;
    border-radius: 0 8px 8px 0;
    width: 602px;
    height: 302px;
  }
`;
export const Textarea = styled.textarea`
  background-color: transparent;
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  height: 75%;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 85%;
    font-size: 20px;
    width: 80%;
  }
`;
export const LanguageBox = styled.div`
  position: absolute;
  bottom: 22px;
  right: 22px;
  display: flex;
  gap: 8px;
  align-items: center;
  height: 28px;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    top: 22px;
  }
`;
export const Language = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: var(--black);
  line-height: 28px;
`;
export const BtnNext = styled.button<{ disabled: boolean }>`
  position: absolute;
  bottom: 22px;
  left: 22px;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${props => (props.disabled ? '#d7d7d7' : 'rgba(18, 20, 23, 0.5)')};
`;
export const BtnBox = styled.div`
  margin-top: 132px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 40px;
    flex-direction: row;
    gap: 10px;
    width: 427px;
    max-height: 55px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 80px;
  }
`;
export const BtnCansel = styled.button`
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 16px;
  color: rgba(18, 20, 23, 0.5);

  border: none;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0px;
    border: 1px solid var(--green);
    border-radius: 30px;
    padding: 14px 71px;
    min-width: 203px;
    height: 55px;
  }
`;
