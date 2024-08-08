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
    setTreiningTask(getWordsTasks);
  }, [getWordsTasks, treiningTask]);

  let carentTask = treiningTask[question];
  const tasks = treiningTask.length;

  const nextQest = () => {
    if (getWordsTasks.length) {
      if (question < tasks - 1) {
        setIsDisabled(false);
        setPercentage(Math.round(((question + 1) * 100) / tasks));
        setQuestion(question + 1);
        training();
        setAnswer('');
      } else {
        toast('Training finish, words more not');
        setPercentage(100);
        setIsDisabled(true);
      }
    }
    return;
  };

  const training = () => {
    if (carentTask.task === 'en' && answer) {
      let otvet = { ...carentTask, en: answer };
      setAnswerArr([...answerArr, otvet]);
    }
    if (carentTask.task === 'ua' && answer) {
      let otvet = { ...carentTask, ua: answer };
      setAnswerArr([...answerArr, otvet]);
    }
  };

  const answersWordsBack = () => {
    training();

    if (!answerArr.length && answer && carentTask.task === 'en') {
      saveAnsver({ ...carentTask, en: answer });
      setAnswerArr(answerArr);
    }
    if (!answerArr.length && answer && carentTask.task === 'ua') {
      saveAnsver({ ...carentTask, ua: answer });
      setAnswerArr(answerArr);
    }
    if (answerArr.length && carentTask.task === 'en') {
      let otvet = { ...carentTask, en: answer };
      saveAnsverArr([...answerArr, otvet]);
    }
    if (answerArr.length && carentTask.task === 'ua') {
      let otvet = { ...carentTask, ua: answer };
      saveAnsverArr([...answerArr, otvet]);
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
              <Textarea
                value={carentTask?.task === 'en' ? carentTask?.ua : answer}
                placeholder="Введіть переклад"
                onChange={e => setAnswer(e.target.value)}
              />
              <LanguageBox>
                <IconSvg icon="ua" size="28px" />
                <Language>Ukrainian</Language>
              </LanguageBox>
              <BtnNext type="button" disabled={isDisabled} onClick={nextQest}>
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
                value={carentTask?.task === 'ua' ? carentTask?.en : answer}
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
