import styled from 'styled-components';

interface StyledContainerProps {
  bg?: string;
  children?: React.ReactNode;
}

const Box = styled.div<StyledContainerProps>`
  margin: 0 auto;
  width: 100%;
  background-color: ${props => props.bg || 'transparent'};
  padding-left: 16px;
  padding-right: 16px;

  @media only screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media only screen and (min-width: 1440px) {
    width: 1440px;
    max-width: 1440px;
    padding-left: 64px;
    padding-right: 64px;
  }
`;

export const Container: React.FC<StyledContainerProps> = props => {
  return <Box className="container" {...props} />;
};
