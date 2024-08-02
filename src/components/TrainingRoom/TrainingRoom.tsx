import React from 'react';

import Back from 'components/common/Back';
import TrainingEmpty from './TrainingRoomEmpty/TrainingEmpty';
import { TrainingRoomBox } from './TrainingRoom.styled';
const TrainingRoom = () => {
  return (
    <Back>
      <TrainingRoomBox>
        <TrainingEmpty />
      </TrainingRoomBox>
    </Back>
  );
};

export default TrainingRoom;
