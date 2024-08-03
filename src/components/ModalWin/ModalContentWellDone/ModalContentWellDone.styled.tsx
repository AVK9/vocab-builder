import styled from 'styled-components';
import book from '../../../assets/img/book.png';

export const BoxWellDone = styled.div`
  /* margin-top: 32px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0px; */

  background-image: url(${book});
  background-repeat: no-repeat;
  background-position: right bottom;
`;
export const NamePopup = styled.h2`
  margin-top: 32px;
  margin-bottom: 32px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--white);
`;
export const AnswersTrue = styled.div``;
export const AnswersFalse = styled.div``;
export const Answers = styled.div`
  display: flex;
  gap: 32px;
`;
export const List = styled.ul``;
export const Item = styled.li`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--white);
`;
export const TitleList = styled.p`
  margin-bottom: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  color: rgba(252, 252, 252, 0.5);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: transparent;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: background ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:active {
    background: rgba(180, 180, 180, 0.1);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;
