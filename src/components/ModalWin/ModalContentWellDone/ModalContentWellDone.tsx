import React from 'react';
import { useSelector } from 'react-redux';
import { selectWordsAnswers } from 'store/words/wordsSelectors';
import {
  Answers,
  AnswersFalse,
  AnswersTrue,
  BoxWellDone,
  CloseBtn,
  Item,
  List,
  NamePopup,
  TitleList,
} from './ModalContentWellDone.styled';
import { IconSvg } from 'components/common/IconSvg';
import { useNavigate } from 'react-router-dom';
import { DICTIONARY_ROUTE } from 'utils/const';

interface ModalContentWellDoneProps {
  closeModal: () => void;
}

const ModalContentWellDone: React.FC<ModalContentWellDoneProps> = ({
  closeModal,
}) => {
  const wordsAnswers = useSelector(selectWordsAnswers);
  const navigate = useNavigate();

  const closeMod = () => {
    closeModal();
    navigate(DICTIONARY_ROUTE);
  };

  const wordsAnswersTrue = wordsAnswers.filter(item => item.isDone === true);
  const wordsAnswersFalse = wordsAnswers.filter(item => item.isDone === false);

  return (
    <BoxWellDone>
      <CloseBtn onClick={closeMod}>
        <IconSvg size="24px" icon="x" stroke="white" />
      </CloseBtn>
      <NamePopup>Well done</NamePopup>
      <Answers>
        <AnswersTrue>
          <TitleList>Correct answers:</TitleList>

          <List>
            {wordsAnswersTrue.map(word => (
              <Item key={word.en}>{word.en}</Item>
            ))}
          </List>
        </AnswersTrue>
        <AnswersFalse>
          <TitleList>Mistakes:</TitleList>

          <List>
            {wordsAnswersFalse.map(word => (
              <Item key={word.en}>{word.en}</Item>
            ))}
          </List>
        </AnswersFalse>
      </Answers>
    </BoxWellDone>
  );
};

export default ModalContentWellDone;
