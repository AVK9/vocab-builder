import styled from 'styled-components';

export const TableContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  height: 563px;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: rgba(133, 170, 159, 0.1);
  height: 54px;
  padding: 16px;
  border: 1px solid #dbdbdb;
  text-align: left;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  color: var(--black);
`;

export const Td = styled.td`
  background-color: white;
  padding: 16px;
  border: 1px solid #dbdbdb;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: var(--black);
`;
export const Tr = styled.tr`
  &:first-child ${Th} {
    border-top: none; /* Видалити верхню межу для першого ряду заголовків */
  }
  &:last-child ${Td} {
    border-bottom: none; /* Видалити нижню межу для останнього ряду клітинок */
  }
  ${Td}:first-child,
  ${Th}:first-child {
    border-left: none; /* Видалити ліву межу для першої клітинки кожного ряду */
  }
  ${Td}:last-child,
  ${Th}:last-child {
    border-right: none; /* Видалити праву межу для останньої клітинки кожного ряду */
  }
`;
