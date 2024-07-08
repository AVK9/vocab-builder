import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: #f8f8f8;
  min-height: calc(100vh - 88px);
  width: 100%;
`;

interface BackProps {
  children?: ReactNode;
}

const Back: React.FC<BackProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Back;
