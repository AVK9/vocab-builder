import { IconSvg } from 'components/common/IconSvg';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { delWordsOwnThunk } from 'store/words/wordsThunk';
import styled from 'styled-components';

interface StyledProps {
  isOpen: boolean;
}

const EditDelPopupBox = styled.div<StyledProps>`
  border-radius: 15px;
  padding: 12px 24px;

  box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
  background: #fff;

  position: absolute;
  z-index: 99;
  bottom: -80px;
  left: -80px;

  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  outline: none;
`;
const BtnName = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
`;

interface EditDelPopupProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    _id: string;
    en: string;
    ua: string;
    category: string;
    isIrregular: boolean;
    owner?: string;
    progress?: number;
  };
}

const EditDelPopup: React.FC<EditDelPopupProps> = ({
  data,
  isOpen,
  onClose,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  console.log('EditDelPopup', data);
  const editWord = () => {
    onClose();
  };
  const delWord = async () => {
    await dispatch(delWordsOwnThunk(data._id));
    onClose();
  };
  return (
    <EditDelPopupBox isOpen={isOpen}>
      <Btn type="button" onClick={editWord}>
        <IconSvg icon="edit" stroke="var(--green)" size="16px" />
        <BtnName>Edit</BtnName>
      </Btn>
      <Btn type="button" onClick={delWord}>
        <IconSvg icon="trash" stroke="var(--green)" size="16px" />
        <BtnName>Delete</BtnName>
      </Btn>
    </EditDelPopupBox>
  );
};

export default EditDelPopup;
