import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import { DICTIONARY_ROUTE } from 'utils/const';
import { useModal } from 'components/ModalWin/ModalContext';
import ModalContentAddWord from 'components/ModalWin/ModalContentAddWord/ModalContentAddWord';

const TrainingEmpty: React.FC = () => {
  const navigate = useNavigate();
  const handleAddWordToPage = () => {
    navigate(DICTIONARY_ROUTE);
    handleOpenModal();
  };

  const { openModal } = useModal();
  const { closeModal } = useModal();
  const handleOpenModal = () => {
    openModal(<ModalContentAddWord closeModal={closeModal} />);
  };
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
          <Button onClick={handleAddWordToPage} margin="0px" height="56px">
            Add Word
          </Button>
          <BtnCansel>Cansel</BtnCansel>
        </BtnBox>
      </LeftPartBox>
    </TrainingRoomEmpty>
  );
};

export default TrainingEmpty;
