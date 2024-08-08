import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWordsTasks } from 'store/words/wordsSelectors';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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
import { answersWordsThunk } from 'store/words/wordsThunk';
import { AppDispatch } from 'store/store';
import ModalContentWellDone from 'components/ModalWin/ModalContentWellDone/ModalContentWellDone';
import { useModal } from 'components/ModalWin/ModalContext';
import { DICTIONARY_ROUTE } from 'utils/const';

const TrainingRoom: React.FC = () => {
  const getWordsTasks = useSelector(selectWordsTasks);
  const navigate = useNavigate();
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
    let carentTask = treiningTask[question];
    let otvet = { ...carentTask, en: answer };
    let ansverArr = [...answerArr, otvet];

    if (!answerArr.length && answer) {
      saveAnsver(otvet);
      setAnswerArr(ansverArr);
    }
    if (answerArr.length) {
      saveAnsverArr(ansverArr);
    }
    if (!answerArr.length && !answer) {
      toast.warn('Give at least one answer');
    }
    return;
  };

  const saveAnsver = async (otvet: Answer) => {
    const resultAction = await dispatch(answersWordsThunk([otvet]));
    if (answersWordsThunk.rejected.match(resultAction)) {
      toast.error(`${resultAction.payload}`);
    } else {
      handleOpenModal();
    }
    return;
  };
  const saveAnsverArr = async (ansverArr: Answer[]) => {
    const resultAction = await dispatch(answersWordsThunk(ansverArr));
    if (answersWordsThunk.rejected.match(resultAction)) {
      toast.error(`${resultAction.payload}`);
    } else {
      handleOpenModal();
    }
    return;
  };

  const exit = () => {
    navigate(DICTIONARY_ROUTE);
  };

  const { openModal } = useModal();
  const { closeModal } = useModal();
  const handleOpenModal = () => {
    openModal(<ModalContentWellDone closeModal={closeModal} />);
  };

  return (
    <TrainingRoomBox>
      {getWordsTasks.length ? (
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
              <BtnNext type="button" disabled={isDisabled} onClick={training}>
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
            <Button
              type="submit"
              onClick={answersWordsBack}
              margin="0px"
              height="56px"
            >
              Save
            </Button>
            <BtnCansel onClick={exit}>Cansel</BtnCansel>
          </BtnBox>
        </>
      ) : (
        <TrainingEmpty />
      )}
    </TrainingRoomBox>
  );
};

export default TrainingRoom;
