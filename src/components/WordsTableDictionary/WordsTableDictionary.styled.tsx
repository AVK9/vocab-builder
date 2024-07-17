import styled from 'styled-components';

export const TableContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 18px;
    background-color: #fff;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: solid #fff 18px;
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
  background: var(--white);
  z-index: 2;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const Th = styled.th`
  background-color: rgba(133, 170, 159, 0.1);
  height: 54px;
  padding: 5px;
  border: 1px solid #dbdbdb;
  text-align: left;

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
  }

  font-family: var(--font-family);
  font-weight: 500;
  color: var(--black);

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
`;

export const Td = styled.td`
  text-align: left;
  border: 1px solid #dbdbdb;
  z-index: 2;
  padding: 5px;

  &:first-child {
    border-bottom-left-radius: 0;
  }

  &:last-child {
    border-bottom-right-radius: 0;
  }

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

export const LastRowTd = styled(Td)`
  &:first-child {
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
  }
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
export const Icon = styled.span`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const CellFlex = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    justify-content: start;
  }
`;
export const CellFlexBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    justify-content: start;
  }
`;
export const ProgressPersent = styled.span`
  margin-right: 16px;
`;
export const Persent = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;
