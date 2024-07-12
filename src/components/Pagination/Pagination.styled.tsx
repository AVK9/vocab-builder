import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 2px;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  @media (min-width: calc(${({ theme }) => theme.breakpoints.mobile} + 55px)) {
    gap: 4px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileX}) {
    gap: 10px;
  }
`;

export const PageButton = styled.button<{ isActive?: boolean }>`
  /* padding-top: 5px; */
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid rgba(18, 20, 23, 0.1);

  font-family: var(--font-family);
  font-weight: 600;
  font-size: 13px;
  color: var(--black);

  background-color: ${({ isActive }) => (isActive ? 'var(--green)' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : 'var(--black)')};

  cursor: pointer;

  &:disabled {
    background-color: #f1f1f1;
    color: #ddd;
    cursor: not-allowed;
  }
  @media (max-width: calc(${({ theme }) => theme.breakpoints.mobile} + 0px)) {
    /* padding-top: 3px; */
    width: 30px;
    height: 30px;
  }
`;

export const Dot = styled.span`
  display: flex;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  padding-bottom: 5px;
`;
