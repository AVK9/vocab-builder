import styled from 'styled-components';
interface StyledFlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  gap?: string;
  m?: string;
  p?: string;
  h?: string;
  w?: string;
  children?: React.ReactNode;
}

const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  gap: ${props => props.gap || '0'};
  margin: ${props => props.m || '0'};
  padding: ${props => props.p || '0'};
  height: ${props => props.h || '100%'};
  width: ${props => props.w || '100%'};
`;
export const Flex: React.FC<StyledFlexProps> = props => {
  return <StyledFlex {...props} />;
};
