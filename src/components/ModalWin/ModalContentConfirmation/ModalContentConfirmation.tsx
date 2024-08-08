import React from 'react';
import {
  BoxConfirmation,
  ButtonBox,
  Message,
} from './ModalContentConfirmation.styled';
import { Button } from 'components/common/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { delWordsOwnThunk } from 'store/words/wordsThunk';
import { toast } from 'react-toastify';

interface ModalContentConfirmationProps {
  clos: () => void;
  delItem: string;
}

const ModalContentConfirmation: React.FC<ModalContentConfirmationProps> = ({
  clos,
  delItem,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const delWord = async () => {
    await dispatch(delWordsOwnThunk(delItem));
    clos();
    toast('The word delete sucsessfull');
  };
  return (
    <BoxConfirmation>
      <Message>You really want to delete the word, if so click Delete</Message>
      <ButtonBox>
        <Button cansel={true} onClick={delWord}>
          Delete
        </Button>
        <Button cansel={true} onClick={clos}>
          Cancel
        </Button>
      </ButtonBox>
    </BoxConfirmation>
  );
};

export default ModalContentConfirmation;
