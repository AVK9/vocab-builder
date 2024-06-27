import styled, { css } from 'styled-components';

interface StyledButtonProps {
  width?: string;
  height?: string;
  align?: string;
  margin?: string;
  background?: string;
  color?: string;
  backgroundhover?: string;
  add?: boolean;
  cansel?: boolean;
  cansel1?: boolean;
  children?: React.ReactNode;
}

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${props => props.align || 'stretch'};

  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;

  border-radius: 30px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '60px'};

  margin: ${({ margin }) => margin || '20px 0px 0px 0px'};
  color: ${props => props.color || 'var(--white)'};
  background: ${props => props.background || 'var(--green)'};

  background: ${({ theme }) => theme.animation.cubicBezier};
  box-shadow: ${({ theme }) => theme.shadows.small};

  transition: all ${({ theme }) => theme.animation.cubicBezier};
  &:hover {
    background: ${props => props.backgroundhover || 'var(--green-hov)'};
  }
  ${props =>
    props.add &&
    css`
      color: var(--black);

      height: 56px;
      background-color: var(--white);
      transition: all ${({ theme }) => theme.animation.cubicBezier};
      &:hover {
        color: var(--green);
        background-color: var(--white);
      }
    `}
  ${props =>
    props.cansel &&
    css`
      color: var(--white);
      border: 1px solid rgba(252, 252, 252, 0.4);
      height: 56px;
      background-color: inherit;
      transition: all ${({ theme }) => theme.animation.cubicBezier};
      &:hover {
        color: var(--black);
        background-color: var(--white);
      }
    `}
    ${props =>
    props.cansel1 &&
    css`
      color: var(--green);
      border: 1px solid var(--green);
      height: 56px;
      background-color: inherit;
      transition: all ${({ theme }) => theme.animation.cubicBezier};
      &:hover {
        color: var(--white);
        background-color: var(--green);
      }
    `}
`;

export const Button: React.FC<StyledButtonProps> = props => {
  return <StyledButton {...props} />;
};
