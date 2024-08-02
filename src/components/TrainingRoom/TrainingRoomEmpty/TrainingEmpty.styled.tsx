import styled from 'styled-components';

export const TrainingRoomEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 75px 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 140px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding-top: 210px;
    flex-direction: row-reverse;
    width: 902px;
  }
`;
export const PictureTraining = styled.div`
  margin: auto;
`;
export const DescTraining = styled.div`
  margin-top: 32px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0px;
  }
`;
export const HeadTraining = styled.h2`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
  }
`;
export const TextTraining = styled.p`
  margin-top: 16px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  color: var(--black);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 32px;
    font-size: 16px;
    line-height: 150%;
  }
`;
export const BtnBox = styled.div`
  margin-top: 132px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 64px;
    flex-direction: row;
    gap: 10px;
    width: 427px;
    max-height: 55px;
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
export const LeftPartBox = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 581px;
  }
`;
