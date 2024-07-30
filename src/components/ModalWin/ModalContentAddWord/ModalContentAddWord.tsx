import React, { useState } from 'react';
import SelectField from 'components/common/SelectField/SelectField';
import EditWordContent from 'components/Modal/EditWordContent';
import { useSelector } from 'react-redux';
import { selectStateWordsCategories } from 'store/words/wordsSelectors';
import {
  ButtonBox,
  Content,
  ContentBox,
  EditWordContentBox,
  FormBox,
  HeadPopup,
  InfoText,
  Input,
  InputBox,
  Name,
  NameBox,
  SelectedBox,
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
  const [radio, setRadio] = useState('Regular');
  const categories = useSelector(selectStateWordsCategories);

  const handleSelectChange = (selectedValue: string) => {
    setSelect(selectedValue);
  };
  const handleRadioChange = (radioValue: string) => setRadio(radioValue);

  const [wordUA, setWordUa] = useState('');
  const [wordEn, setWordEn] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleAddWord = async () => {
    console.log('radio!!!@@@ :>> ', radio);

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
      <ContentBox>
        <HeadPopup>Add word</HeadPopup>
        <Content>
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
        </Content>
      </ContentBox>
      <FormBox>
        <SelectedBox>
          <SelectField
            holder="Categories"
            categories={categories}
            onSelectChange={handleSelectChange}
            onRadioChange={handleRadioChange}
            color="white"
          />
          {radio === 'Irregular' && select === 'verb' && (
            <InfoText>
              Such data must be entered in the format I form-II form-III form.
            </InfoText>
          )}
        </SelectedBox>
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
            <Button
              add={true}
              margin="16px 0px 32px 0px"
              onClick={handleAddWord}
            >
              Save
            </Button>
            <Button
              cansel={true}
              margin="16px 0px 32px 0px"
              onClick={closeModal}
            >
              Cansel
            </Button>
          </ButtonBox>
        </EditWordContentBox>
      </FormBox>
    </div>
  );
};

export default ModalContentAddWord;
