import styled, { css } from 'styled-components';
import { IconSvg } from '../IconSvg';

interface IconBoxProps {
  active: boolean;
  color?: string;
  specialStyle?: boolean;
}

export const SelectWrapper = styled.div<{ specialStyle?: boolean }>`
  position: relative;
  width: 100%;
  margin-bottom: 8px;

  ${props =>
    props.specialStyle &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-bottom: 0px;
      }
    `}
`;
export const InputWrapper = styled.div<{ specialStyle?: boolean }>`
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 254px;
  }
  ${props =>
    props.specialStyle &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileX}) {
        width: 343px;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 244px;
      }
    `}
`;

export const Input = styled.div<{ specialStyle?: boolean }>`
  cursor: pointer;
  outline: none;

  border-radius: 15px;
  padding: 12px 24px;
  width: 100%;
  height: 48px;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  transition: border 0.5s ease-in-out;

  &:first-letter {
    text-transform: uppercase;
  }

  border: 1px solid #d1d5db;
  background-color: transparent;
  color: var(--white);

  &:hover {
    border: 1px solid white;
  }

  ${props =>
    props.specialStyle &&
    css`
      border: 1px solid rgba(18, 20, 23, 0.1);
      background-color: #fff;
      color: var(--black);
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileX}) {
        width: 343px;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 244px;
      }
      &:hover {
        border: 1px solid var(--green);
      }
    `}
`;

export const IconSvgBox = styled.div`
  position: absolute;
  bottom: 11.5px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const IconSvgStyled = styled(IconSvg)<{ specialStyle?: boolean }>`
  stroke: white;
  ${props =>
    props.specialStyle &&
    css`
      stroke: black;
    `}
`;
export const IconSvgFill = styled(IconSvg)<{ specialStyle?: boolean }>`
  fill: white;
  ${props =>
    props.specialStyle &&
    css`
      fill: black;
    `}
`;

export const OptionsList = styled.ul<{ isOpen: boolean }>`
  box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
  border: 1px solid rgba(18, 20, 23, 0.1);
  background-color: #fff;
  border-radius: 15px;
  padding: 12px 0px;
  width: 100%;
  overflow-y: auto;
  position: absolute;
  top: 56px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: ${props => (props.isOpen ? 10 : 0)};
  max-height: ${props => (props.isOpen ? 'auto' : '0px')};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: opacity 0.7s, max-height 0.5s ease-in-out;
`;

export const OptionItem = styled.li`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
  padding-left: 24px;

  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: var(--white);
    background-color: rgba(133, 170, 159, 0.5);
  }
  &:last-child {
    border-bottom: none;
  }
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const RadioBlock = styled.div`
  display: flex;
  gap: 16px;
  width: 159px;
  height: 17px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 23px;
    align-items: center;
    margin-top: 13px;
  }
`;

export const RadioBox = styled.div`
  position: relative;
  width: 100%;
`;
export const Label = styled.label<{ specialStyle?: boolean }>`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: var(--white);
  line-height: 18px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;

  ${props =>
    props.specialStyle &&
    css`
      color: var(--black);
    `}
`;

export const RadioInput = styled.input`
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  z-index: 1;
  opacity: 0;
`;

export const IconBox = styled.div<IconBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 17px;
  height: 17px;
  border-radius: 50%;

  position: absolute;
  top: 0;
  left: 0;
  flex-shrink: 0;
  background: ${props =>
    props.active
      ? `2px solid var(--${props.color || 'green'})`
      : 'transparent'};
  border: ${props =>
    props.active
      ? `2px solid var(--${props.color || 'green'})`
      : '2px solid #fff'};

  ${props =>
    props.specialStyle &&
    css<IconBoxProps>`
      border: ${props =>
        props.active
          ? `2px solid var(--${props.color || 'green'})`
          : '2px solid #636366'};
    `}
`;

export const IconDot = styled.div<{
  active: boolean;
  color: string | undefined;
}>`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  flex-shrink: 0;
  background: ${props =>
    props.active ? `var(--${props.color || 'green'})` : 'transparent'};
  border: solid transparent 4.5px;
`;
export const SelectBox = styled.div<{ specialStyle?: boolean }>`
  ${props =>
    props.specialStyle &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        gap: 8px;
      }
    `}
`;
