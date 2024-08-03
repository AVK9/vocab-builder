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
import { WordTask } from 'store/words/wordsTypes';

const TrainingRoom: React.FC = () => {
  const getWordsTasks = useSelector(selectWordsTasks);
  let percentage = 50;
  let question = 0;
  console.log('getWordsTasks', getWordsTasks);

  const [treiningTask, setTreiningTask] = useState<WordTask[]>([]);

  useEffect(() => {
    if (getWordsTasks) {
      setTreiningTask(getWordsTasks);
    }
  }, [getWordsTasks, treiningTask]);

  const training = () => {
    const tasks = treiningTask.length;
    if (question <= tasks) {
      question += 1;
      console.log('question', question);
    } else {
      console.log('кінець');
    }
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
              <Textarea placeholder="Введіть переклад" />
              <LanguageBox>
                <IconSvg icon="ua" size="28px" />
                <Language>Ukrainian</Language>
              </LanguageBox>
              <BtnNext onClick={training}>
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
                value={treiningTask[question]?.ua}
              />
              <LanguageBox>
                <IconSvg icon="uk" size="28px" />
                <Language>English</Language>
              </LanguageBox>
            </EnTrainingBox>
          </TrainingBox>
          <BtnBox>
            <Button margin="0px" height="56px">
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
