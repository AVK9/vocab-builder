import styled from 'styled-components';

export const NameBox = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
export const Name = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: var(--white);
  line-height: 28px;
`;

export const ButtonBox = styled.div`
  max-width: 310px;

  display: flex;
  gap: 8px;
`;
export const EditWordContentBox = styled.div`
  margin-top: 32px;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid #d1d5db;
  border-radius: 15px;
  padding: 12px 24px 12px 24px;
  width: 100%;
  height: 48px;
  margin-bottom: 16px;
`;
export const InputBox = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    gap: 8px;
  }
`;
