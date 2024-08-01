import React from 'react';
import {
  BtnBox,
  BtnCansel,
  DescTraining,
  HeadTraining,
  LeftPartBox,
  PictureTraining,
  TextTraining,
  TrainingRoomBox,
  TrainingRoomEmpty,
} from './TrainingRoom.styled';
import emptyImg from '../../assets/img/blood-report.svg';
import { Button } from 'components/common/Button';
import { Container } from 'components/common/Container';
const TrainingRoom = () => {
  return (
    <Container>
      <TrainingRoomBox>
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
                Please create or add a word to start the workout. We want to
                improve your vocabulary and develop your knowledge, so please
                share the words you are interested in adding to your study.
              </TextTraining>
            </DescTraining>
            <BtnBox>
              <Button margin="0px">Add Word</Button>
              <BtnCansel>Cansel</BtnCansel>
            </BtnBox>
          </LeftPartBox>
        </TrainingRoomEmpty>
      </TrainingRoomBox>
    </Container>
  );
};

export default TrainingRoom;
