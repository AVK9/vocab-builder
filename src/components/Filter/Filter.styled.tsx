import styled from 'styled-components';
import { IconSvg } from './../common/IconSvg';

export const ValueWord = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  color: var(--black);
`;
export const ToStudy = styled.p`
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
export const InputBox = styled.div`
  position: relative;
  width: 343px;
  margin-top: 32px;
  margin-bottom: 8px;
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
`;
export const IconSvgStyled = styled(IconSvg)`
  position: absolute;
  top: 14px;
  right: 24px;
`;

export const RadioBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* height: 24px; */
`;
export const Label = styled.label<{ active: boolean }>`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  text-align: left;
  margin-top: 5px;
  /* background-color: red; */
  /* width: 300px; */
  /* position: absolute;
  left: 30px; */
  padding-left: 20px;

  color: ${props => (props.active ? '#101828' : 'rgba(16, 24, 40, 0.6)')};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    /* width: 60%; */
  }
`;

export const RadioInput = styled.input`
  outline: none;
  border: none;

  /* height: 24px; */
  /* width: 24px; */
  /* width: 100%; */
  z-index: 1;
  opacity: 0;
  cursor: pointer;
`;

export const IconBox = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border-radius: 50%;

  position: absolute;
  top: 50% -9px;
  left: 0;

  background: ${props =>
    props.active ? '2px solid var(--green)' : 'transparent'};
  border: ${props =>
    props.active ? '2px solid var(--green)' : '2px solid #636366'};
`;

export const IconDot = styled.div<{ active: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;

  background: ${props => (props.active ? 'var(--green)' : 'transparent')};
`;
export const RadioBlock = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 14px;
`;
