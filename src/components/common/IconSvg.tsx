import styled, { css } from 'styled-components';
import sprite from '../../assets/img/sprite.svg';

interface IconWrapperProps {
  size?: string;
  ml?: string;
  mr?: string;
  stroke?: string;
  fill?: string;
  icon?: string;
  tablet?: string;
  onClick?: () => void;
}

const IconWrapper = styled.svg<IconWrapperProps>`
  width: ${props => props.size || '32px'};
  height: ${props => props.size || '32px'};
  margin-left: ${props => props.ml || '0px'};
  margin-right: ${props => props.mr || '0px'};
  stroke: ${props => props.stroke || 'transparent'};
  fill: ${props => props.fill || 'transparent'};
  transition: transform 0.2s;
  stroke-width: 1.5px;

  &:hover {
    transform: scale(1.1);
  }
  ${props =>
    props.tablet &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 40px;
        height: 28px;
      }
    `}
`;

export const IconSvg: React.FC<IconWrapperProps> = props => {
  const { icon } = props;
  return (
    <IconWrapper {...props}>
      <use href={`${sprite}#icon-${icon}`} />
    </IconWrapper>
  );
};
