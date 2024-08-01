import styled from 'styled-components';
import { IconSvg } from '../common/IconSvg';

export const FilterBox = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    margin-top: 52px;
    margin-bottom: 28px;
  }
`;

export const ValueWord = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  color: var(--black);
`;
export const BtnBlock = styled.div`
  margin-top: 96px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 28px;
    margin-bottom: 28px;
  }
`;
export const ToStudy = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: rgba(18, 20, 23, 0.5);
  white-space: nowrap;
`;
export const BtnName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 8px;

  outline: none;
  cursor: pointer;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
  white-space: nowrap;
  line-height: 20px;
`;
export const BtnBox = styled.div`
  width: 248px;
  height: 24px;
  margin-top: 8px;
  margin-bottom: 32px;
  display: flex;
  gap: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const InputBlock = styled.div`
  height: 48px;
  margin-top: 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    align-items: flex-start;
    width: 100%;
    gap: 8px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 0px;
  }
`;
export const InputBox = styled.div`
  position: relative;
  width: 288px;
  margin-bottom: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileX}) {
    width: 343px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 274px;
    margin-bottom: 0px;
  }
`;
export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 15px;
  padding: 12px 24px;
  height: 48px;
  width: 288px;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
  transition: border 0.5s ease-in-out;
  &:hover {
    border: 1px solid var(--green);
  }

  &::placeholder {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--black);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileX}) {
    width: 343px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 274px;
  }
`;
export const IconSvgStyled = styled(IconSvg)`
  position: absolute;
  top: 14px;
  right: 24px;
`;
