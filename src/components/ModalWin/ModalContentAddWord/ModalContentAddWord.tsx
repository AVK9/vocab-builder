import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { IconSvg } from 'components/common/IconSvg';
import { Button } from 'components/common/Button';
import { AppDispatch } from 'store/store';
import { createWordThunk } from 'store/words/wordsThunk';
import SelectField from 'components/common/SelectField/SelectField';
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
  Tooltip,
} from './ModalContentAddWord.styled';

interface ModalContentAddWordProps {
  closeModal: () => void;
}

const ModalContentAddWord: React.FC<ModalContentAddWordProps> = ({
  closeModal,
}) => {
  const [select, setSelect] = useState('');
  const [isInputDisabled, setInputDisabled] = useState(true);
  const [radio, setRadio] = useState(false);
  const categories = useSelector(selectStateWordsCategories);

  const patternFieldEn = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
  const patternFieldUa = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/;
  const patternIrregular = /^[A-Za-z]+-[A-Za-z]+-[A-Za-z]+$/;
  const patternFieldEnUn =
    radio === false
      ? /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/
      : /^[A-Za-z]+-[A-Za-z]+-[A-Za-z]+$/;

  const handleSelectChange = (selectedValue: string) => {
    setSelect(selectedValue);

    if (selectedValue === 'Categories') {
      setInputDisabled(true);
    } else {
      setInputDisabled(false);
    }
  };
  const handleRadioChange = (radioValue: boolean) => setRadio(radioValue);

  const [wordUa, setWordUa] = useState('');
  const [wordEn, setWordEn] = useState('');
  const [errorFieldUa, setErrorFieldUa] = useState(false);
  const [errorFieldEn, setErrorFieldEn] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleAddWord = async () => {
    const bodyWerb = {
      en: wordEn,
      ua: wordUa,
      category: select,
      isIrregular: radio,
    };
    const body = {
      en: wordEn,
      ua: wordUa,
      category: select,
    };

    if (!wordUa || !wordEn || errorFieldUa || errorFieldEn) {
      toast.warn('Please input all filds');
    }
    if (select === 'Categories') {
      toast.warn('Please choise Categories of the word');
    }
    if (
      select !== 'verb' &&
      select !== 'Categories' &&
      patternFieldUa.test(wordUa) &&
      patternFieldEn.test(wordEn)
    ) {
      const resultAction = await dispatch(createWordThunk(body));
      if (createWordThunk.rejected.match(resultAction)) {
        toast.error(`${resultAction.payload}`);
      } else {
        toast('Word add successfully');
        closeModal();
      }
      return;
    }
    if (select === 'verb' && patternFieldEnUn.test(wordEn)) {
      const resultAction = await dispatch(createWordThunk(bodyWerb));
      if (createWordThunk.rejected.match(resultAction)) {
        toast.error(`${resultAction.payload}`);
      } else {
        toast('Word add successfully');
        closeModal();
      }
      return;
    }
    if (radio === true && select === 'verb' && !patternIrregular.test(wordEn)) {
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
          {radio === true && select === 'verb' && (
            <InfoText>
              Such data must be entered in the format I form-II form-III form.
            </InfoText>
          )}
        </SelectedBox>
        <EditWordContentBox>
          <InputBox isInputDisabled={isInputDisabled}>
            <NameBox>
              <IconSvg icon="ua" size="28px" />
              <Name>Ukrainian</Name>
            </NameBox>
            <Input
              disabled={isInputDisabled}
              className={errorFieldUa ? 'error' : ''}
              errorField={errorFieldUa}
              value={wordUa}
              onChange={e =>
                handleInputChange(e, setWordUa, patternFieldUa, setErrorFieldUa)
              }
            />
            {isInputDisabled && (
              <Tooltip>At first shose Categories field</Tooltip>
            )}
          </InputBox>
          <InputBox isInputDisabled={isInputDisabled}>
            <NameBox>
              <IconSvg icon="uk" size="28px" />
              <Name>English</Name>
            </NameBox>
            <Input
              disabled={isInputDisabled}
              className={errorFieldEn ? 'error' : ''}
              errorField={errorFieldEn}
              value={wordEn}
              onChange={e =>
                handleInputChange(
                  e,
                  setWordEn,
                  radio === true && select === 'verb'
                    ? patternIrregular
                    : patternFieldEn,
                  setErrorFieldEn
                )
              }
            />
            {isInputDisabled && (
              <Tooltip>At first shose Categories field</Tooltip>
            )}
          </InputBox>
          <ButtonBox>
            <Button
              add={true}
              margin="16px 0px 0px 0px"
              onClick={handleAddWord}
            >
              Save
            </Button>
            <Button
              cansel={true}
              margin="16px 0px 0px 0px"
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
