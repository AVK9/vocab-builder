import React from 'react';
import {
  BtnBox,
  BtnCansel,
  DescTraining,
  HeadTraining,
  LeftPartBox,
  PictureTraining,
  TextTraining,
  TrainingRoomEmpty,
} from './TrainingEmpty.styled';
import emptyImg from '../../../assets/img/blood-report.svg';
import { Button } from 'components/common/Button';

const TrainingEmpty = () => {
  return (
    <TrainingRoomEmpty>
      <PictureTraining>
        <img src={emptyImg} alt="picture-study-english" width="203px" />
      </PictureTraining>
      <LeftPartBox>
        <DescTraining>
          <HeadTraining>
            You don't have a single word to learn right now.
          </HeadTraining>
          <TextTraining>
            Please create or add a word to start the workout. We want to improve
            your vocabulary and develop your knowledge, so please share the
            words you are interested in adding to your study.
          </TextTraining>
        </DescTraining>
        <BtnBox>
          <Button margin="0px" height="56px">
            Add Word
          </Button>
          <BtnCansel>Cansel</BtnCansel>
        </BtnBox>
      </LeftPartBox>
    </TrainingRoomEmpty>
  );
};

export default TrainingEmpty;
