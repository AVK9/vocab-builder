import { IconSvg } from 'components/common/IconSvg';
import React from 'react';
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
  z-index: 1000000;
  bottom: -110px;
  left: -80px;

  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin-bottom: 8px;
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
  console.log('EditDelPopup', isOpen);
  const editWord = () => {
    onClose();
  };
  const delWord = () => {
    onClose();
  };
  return (
    <EditDelPopupBox isOpen={isOpen}>
      <Btn type="button" onClick={editWord}>
        <IconSvg icon="edit" stroke="var(--green)" />
        <BtnName>Edit</BtnName>
      </Btn>
      <Btn type="button" onClick={delWord}>
        <IconSvg icon="trash" stroke="var(--green)" />
        <BtnName>Delete</BtnName>
      </Btn>
    </EditDelPopupBox>
  );
};

export default EditDelPopup;
