import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWordsTasks } from 'store/words/wordsSelectors';

import TrainingEmpty from './TrainingRoomEmpty/TrainingEmpty';
import { Button } from 'components/common/Button';
import {
  BtnBox,
  BtnCansel,
  EnTrainingBox,
  Language,
  LanguageBox,
  Persent,
  ProgressBar,
  ProgressBarBox,
  TrainingBox,
  TrainingRoomBox,
  UaTrainingBox,
  VidgetBox,
  BtnNext,
  Textarea,
} from './TrainingRoom.styled';
import ProgressCircle from 'components/common/ProgressCircle';
import { IconSvg } from 'components/common/IconSvg';
import { Answer, WordTask } from 'store/words/wordsTypes';
import { toast } from 'react-toastify';
import { answersWordsThunk } from 'store/words/wordsThunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import ModalContentWellDone from 'components/ModalWin/ModalContentWellDone/ModalContentWellDone';
import { useModal } from 'components/ModalWin/ModalContext';

const TrainingRoom: React.FC = () => {
  const getWordsTasks = useSelector(selectWordsTasks);
  const dispatch = useDispatch<AppDispatch>();
  const [treiningTask, setTreiningTask] = useState<WordTask[]>([]);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answerArr, setAnswerArr] = useState<Answer[]>([]);
  const [percentage, setPercentage] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (getWordsTasks) {
      setTreiningTask(getWordsTasks);
    }
  }, [getWordsTasks, treiningTask]);

  const training = () => {
    const tasks = treiningTask.length;
    let carentTask = treiningTask[question];

    if (answer) {
      let otvet = { ...carentTask, en: answer };
      setAnswerArr([...answerArr, otvet]);

      console.log('otvet :>> ', otvet);
      console.log('answerArr :>> ', answerArr);
    }

    if (question <= tasks) {
      setIsDisabled(false);
      setQuestion(question + 1);
      setPercentage(Math.round((question * 100) / tasks));
      setAnswer('');
    } else {
      toast('Training finish, words more not');
      setIsDisabled(true);
    }
  };

  const answersWordsBack = () => {
    answerArr && dispatch(answersWordsThunk(answerArr));
    handleOpenModal();
  };
  console.log('question', answer);

  const { openModal } = useModal();
  const { closeModal } = useModal();
  const handleOpenModal = () => {
    openModal(<ModalContentWellDone closeModal={closeModal} />);
  };

  return (
    <TrainingRoomBox>
      {getWordsTasks ? (
        <>
          <ProgressBarBox>
            <ProgressBar>
              <Persent>{percentage}</Persent>
              <VidgetBox>
                <ProgressCircle
                  colorPers="var(--green)"
                  color="#fff"
                  percentage={percentage}
                  size={44}
                />
              </VidgetBox>
            </ProgressBar>
          </ProgressBarBox>
          <TrainingBox>
            <UaTrainingBox>
              <Textarea value={treiningTask[question]?.ua} />
              <LanguageBox>
                <IconSvg icon="ua" size="28px" />
                <Language>Ukrainian</Language>
              </LanguageBox>
              <BtnNext disabled={isDisabled} onClick={training}>
                Next
                <IconSvg
                  icon="arrow-right"
                  stroke="var(--green)"
                  size="20px  "
                />
              </BtnNext>
            </UaTrainingBox>
            <EnTrainingBox>
              <Textarea
                placeholder="Введіть переклад"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
              />
              <LanguageBox>
                <IconSvg icon="uk" size="28px" />
                <Language>English</Language>
              </LanguageBox>
            </EnTrainingBox>
          </TrainingBox>
          <BtnBox>
            <Button onClick={answersWordsBack} margin="0px" height="56px">
              Save
            </Button>
            <BtnCansel>Cansel</BtnCansel>
          </BtnBox>
        </>
      ) : (
        <TrainingEmpty />
      )}
    </TrainingRoomBox>
  );
};

export default TrainingRoom;
