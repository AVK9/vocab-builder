import React, { useEffect, useState } from 'react';
import SelectField from 'components/common/SelectField/SelectField';
import EditWordContent from 'components/Modal/EditWordContent';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectStateWordsCategories,
} from 'store/words/wordsSelectors';
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
import { createWordThunk } from 'store/words/wordsThunk';
import { toast } from 'react-toastify';
import { string } from 'yup';

interface ModalContentAddWordProps {
  closeModal: () => void;
}

const ModalContentAddWord: React.FC<ModalContentAddWordProps> = ({
  closeModal,
}) => {
  const [select, setSelect] = useState('');
  const [radio, setRadio] = useState('Regular');
  const categories = useSelector(selectStateWordsCategories);

  const patternFieldEn = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
  const patternFieldUa = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/;
  const patternIrregular = /^[A-Za-z]+-[A-Za-z]+-[A-Za-z]+$/;

  const handleSelectChange = (selectedValue: string) => {
    setSelect(selectedValue);
  };
  const handleRadioChange = (radioValue: string) => setRadio(radioValue);

  const [wordUa, setWordUa] = useState('');
  const [wordEn, setWordEn] = useState('');
  const [errorFieldUa, setErrorFieldUa] = useState(false);
  const [errorFieldEn, setErrorFieldEn] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const errorMessage = useSelector(selectError);

  const body = {
    en: wordEn,
    ua: wordUa,
    category: select,
    isIrregular: radio !== 'Regular' ? true : false,
  };
  const bd = {
    en: wordEn,
    ua: wordUa,
    category: select,
  };

  const handleAddWord = async () => {
    if (!wordUa || !wordEn || errorFieldUa || errorFieldEn) {
      toast.warn('Please input all filds');
    }
    if (select === 'Categories') {
      toast.warn('Please choise Categories of the word');
    }
    if (select !== 'verb' && select !== 'Categories') {
      const resultAction = await dispatch(createWordThunk(bd));
      if (createWordThunk.rejected.match(resultAction)) {
        toast.error(`${resultAction.payload}`);
      } else {
        toast('Word add successfully');
        closeModal();
      }
    }
    if (
      radio === 'Regular' &&
      select === 'verb' &&
      patternFieldEn.test(wordEn)
    ) {
      await dispatch(createWordThunk(body));
      toast('Word add successfully');
      closeModal();
      return;
    }
    if (
      radio === 'Irregular' &&
      select === 'verb' &&
      patternIrregular.test(wordEn)
    ) {
      console.log('body :>> ', body);
      await dispatch(createWordThunk(body));
      toast('Word add successfully');
      closeModal();
      return;
    }
    if (
      radio === 'Irregular' &&
      select === 'verb' &&
      !patternIrregular.test(wordEn)
    ) {
      toast.warn(
        'Such data must be entered in the format I form-II form-III form'
      );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    pattern: RegExp,
    setError: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const value = e.target.value;
    setFunction(value);
    if (pattern.test(value)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  // console.log('errorMessage', errorMessage);

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
            <Input
              className={errorFieldUa ? 'error' : ''}
              errorField={errorFieldUa}
              value={wordUa}
              onChange={e =>
                handleInputChange(e, setWordUa, patternFieldUa, setErrorFieldUa)
              }
            />
          </InputBox>
          <InputBox>
            <NameBox>
              <IconSvg icon="uk" size="28px" />
              <Name>English</Name>
            </NameBox>
            <Input
              className={errorFieldEn ? 'error' : ''}
              errorField={errorFieldEn}
              value={wordEn}
              onChange={e =>
                handleInputChange(
                  e,
                  setWordEn,
                  radio === 'Irregular' && select === 'verb'
                    ? patternIrregular
                    : patternFieldEn,
                  setErrorFieldEn
                )
              }
            />
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
