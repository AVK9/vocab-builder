import styled, { css } from 'styled-components';

interface StyledTextProps {
  mt?: string;
  mb?: string;
  h2?: string;
  p?: string;
  children?: React.ReactNode;
}

const StyledText = styled.h1<StyledTextProps>`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 30px;
  line-height: 107%;
  letter-spacing: -0.02em;
  color: ${props => props.color || 'var(--black)'};
  margin-top: ${props => props.mt || '0px'};
  margin-bottom: ${props => props.mb || '0px'};

  ${props =>
    props.h2 &&
    css`
      font-size: 24px;
      line-height: 133%;
    `}

  ${props =>
    props.p &&
    css`
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: rgba(18, 20, 23, 0.8);
      margin-top: 16px;
      margin-bottom: 16px;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    `}
`;

export const Text: React.FC<StyledTextProps> = props => {
  return <StyledText {...props} />;
};
