import { Button } from 'components/common/Button';
import { IconSvg } from 'components/common/IconSvg';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AppDispatch } from 'store/store';
import { useDispatch } from 'react-redux';
import { editWordsOwnThunk } from 'store/words/wordsThunk';

interface EditWordContentProps {
  closeModal: () => void;
  data: {
    _id: string;
    en: string;
    ua: string;
    category: string;
    isIrregular?: boolean;
    owner?: string;
    progress?: number;
  };
}

const NameBox = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const Name = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: var(--white);
  line-height: 28px;
`;

const ButtonBox = styled.div`
  max-width: 310px;

  display: flex;
  gap: 8px;
`;
const EditWordContentBox = styled.div`
  margin-top: 32px;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid #d1d5db;
  border-radius: 15px;
  padding: 12px 24px 12px 24px;
  width: 100%;
  height: 48px;
  margin-bottom: 16px;
`;
const InputBox = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    gap: 8px;
  }
`;

const EditWordContent: React.FC<EditWordContentProps> = ({
  closeModal,
  data,
}) => {
  const [wordUA, setWordUa] = useState(data.ua);
  const [wordEn, setWordEn] = useState(data.en);

  const dispatch = useDispatch<AppDispatch>();

  const handleEditWord = async () => {
    const body = {
      id: data._id,
      en: wordEn,
      ua: wordUA,
      category: data.category,
      isIrregular: data.isIrregular ?? false,
    };
    await dispatch(editWordsOwnThunk(body));
  };

  return (
    <EditWordContentBox>
      <InputBox>
        <NameBox>
          <IconSvg icon="ua" size="28px" />
          <Name>Ukrainian</Name>
        </NameBox>

        <Input value={wordUA} onChange={e => setWordUa(e.target.value)} />
      </InputBox>
      <InputBox>
        <NameBox>
          <IconSvg icon="uk" size="28px" />
          <Name>English</Name>
        </NameBox>
        <Input value={wordEn} onChange={e => setWordEn(e.target.value)} />
      </InputBox>
      <ButtonBox>
        <Button add={true} margin="16px 0px 32px 0px" onClick={handleEditWord}>
          Save
        </Button>
        <Button cansel={true} margin="16px 0px 32px 0px" onClick={closeModal}>
          Cansel
        </Button>
      </ButtonBox>
    </EditWordContentBox>
  );
};

export default EditWordContent;
