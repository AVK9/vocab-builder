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
