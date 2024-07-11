import styled from 'styled-components';

export const TableContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  padding: 18px; /* Це буде відступ для внутрішнього бордера */
  background-color: var(--green);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: solid var(--green) 18px;
      border-radius: inherit;
      pointer-events: none;
      box-sizing: border-box;
    }
  }
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: #ffffff;
  z-index: 1;
`;

export const Table = styled.table`
  width: 100%;
  height: 563px;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: rgba(133, 170, 159, 0.1);
  height: 54px;
  padding: 5px;
  border: 1px solid #dbdbdb;
  text-align: left;

  @media (min-width: calc(${({ theme }) => theme.breakpoints.mobile} + 55px)) {
    padding: 10px;
  }
  @media (min-width: calc(${({ theme }) => theme.breakpoints.mobileX} - 1px)) {
    padding: 16px;
  }
  @media (min-width: calc(${({ theme }) => theme.breakpoints.tablet} - 0px)) {
    padding: 22px;
    font-size: 18px;
  }

  font-family: var(--font-family);
  font-weight: 500;

  color: var(--black);
`;

export const Td = styled.td`
  /* background-color: white; */
  padding: 5px;
  border: 1px solid #dbdbdb;

  @media (min-width: calc(${({ theme }) => theme.breakpoints.mobile} + 55px)) {
    padding: 10px;
  }
  @media (min-width: calc(${({ theme }) => theme.breakpoints.mobileX} - 1px)) {
    padding: 16px;
  }
  @media (min-width: calc(${({ theme }) => theme.breakpoints.tablet} - 0px)) {
    padding: 22px;
    font-size: 18px;
  }

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: var(--black);
`;
export const Tr = styled.tr`
  &:first-child ${Th} {
    border-top: none;
  }
  &:last-child ${Td} {
    border-bottom: none;
  }
  ${Td}:first-child,
  ${Th}:first-child {
    border-left: none;
  }
  ${Td}:last-child,
  ${Th}:last-child {
    border-right: none;
  }
`;
export const Butn = styled.button`
  display: flex;
  justify-content: center;
  gap: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`;
export const ButnText = styled.span`
  display: none;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  color: var(--black);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    font-size: 18px;
  }
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
