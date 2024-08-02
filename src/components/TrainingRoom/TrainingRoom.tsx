import React from 'react';
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
import { store } from './../../store/store';

const TrainingRoom: React.FC = () => {
  const getWordsTasks = useSelector(selectWordsTasks);
  console.log('getWordsTasks', getWordsTasks);
  const percentage = 50;

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
              <BtnNext>
                Next
                <IconSvg
                  icon="arrow-right"
                  stroke="var(--green)"
                  size="20px  "
                />
              </BtnNext>
            </UaTrainingBox>
            <EnTrainingBox>
              <Textarea placeholder="Введіть переклад" />
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
