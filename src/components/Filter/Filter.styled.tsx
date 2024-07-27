import styled from 'styled-components';
import { IconSvg } from './../common/IconSvg';

export const ValueWord = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  color: var(--black);
`;
export const ToStudy = styled.p`
  margin-top: 40px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: rgba(18, 20, 23, 0.5);
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
`;

export const InputBlock = styled.div`
  height: 48px;
  margin-top: 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
export const InputBox = styled.div`
  position: relative;
  width: 343px;
  margin-bottom: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 274px;
  }
`;
export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 15px;
  padding: 12px 24px;
  width: 343px;
  height: 48px;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);

  &::placeholder {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--black);
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

export const RadioBlock = styled.div`
  display: flex;
  gap: 16px;
  width: 159px;
  height: 17px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 48px;
    align-items: center;
  }
`;

export const RadioBox = styled.div`
  position: relative;
  width: 100%;
`;
export const Label = styled.label<{ active: boolean }>`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: var(--black);
  line-height: 18px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    /* width: 60%; */
  }
`;

export const RadioInput = styled.input`
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  z-index: 1;
  opacity: 0;
`;

export const IconBox = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 17px;
  height: 17px;
  border-radius: 50%;

  position: absolute;
  top: 0;
  left: 0;

  background: ${props =>
    props.active ? '2px solid var(--green)' : 'transparent'};
  border: ${props =>
    props.active ? '2px solid var(--green)' : '2px solid #636366'};
`;

export const IconDot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => (props.active ? 'var(--green)' : 'transparent')};
`;
