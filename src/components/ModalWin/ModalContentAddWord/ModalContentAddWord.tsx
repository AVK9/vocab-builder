import React, { useState } from 'react';
import SelectField from 'components/common/SelectField';
import EditWordContent from 'components/Modal/EditWordContent';
import { useSelector } from 'react-redux';
import { selectStateWordsCategories } from 'store/words/wordsSelectors';
import {
  ButtonBox,
  EditWordContentBox,
  Input,
  InputBox,
  Name,
  NameBox,
} from './ModalContentAddWord.styled';
import { IconSvg } from 'components/common/IconSvg';
import { Button } from 'components/common/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';

interface ModalContentAddWordProps {
  closeModal: () => void;
}

const ModalContentAddWord: React.FC<ModalContentAddWordProps> = ({
  closeModal,
}) => {
  const [select, setSelect] = useState('');

  const categories = useSelector(selectStateWordsCategories);

  const handleSelectChange = (selectedValue: string) => {
    setSelect(selectedValue);
  };

  const [wordUA, setWordUa] = useState('');
  const [wordEn, setWordEn] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleAddWord = async () => {
    // const body = {
    //   id: data._id,
    //   en: wordEn,
    //   ua: wordUA,
    //   category: data.category,
    //   isIrregular: data.isIrregular,
    // };
    // await dispatch(editWordsOwnThunk(body));
  };

  return (
    <div>
      <h2>Add word</h2>
      <p>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </p>
      <SelectField
        holder="Categories"
        categories={categories}
        onSelectChange={handleSelectChange}
      />
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
          <Button add={true} margin="16px 0px 32px 0px" onClick={handleAddWord}>
            Save
          </Button>
          <Button cansel={true} margin="16px 0px 32px 0px" onClick={closeModal}>
            Cansel
          </Button>
        </ButtonBox>
      </EditWordContentBox>
    </div>
  );
};

export default ModalContentAddWord;
