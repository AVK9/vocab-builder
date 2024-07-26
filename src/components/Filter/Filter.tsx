import React, { useState } from 'react';
import {
  BtnBox,
  BtnName,
  IconBox,
  IconDot,
  IconSvgStyled,
  Input,
  InputBox,
  Label,
  RadioBlock,
  RadioBox,
  RadioInput,
  ToStudy,
  ValueWord,
} from './Filter.styled';
import { IconSvg } from 'components/common/IconSvg';
import { Link } from 'react-router-dom';
import { TRAINING_ROUTE } from 'utils/const';
import SelectField from 'components/common/SelectField';

interface FilterProps {
  totalCount: number;
}
const Filter: React.FC<FilterProps> = ({ totalCount }) => {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  const [radio, setRadio] = useState('Regular');

  const categories = [
    'verb',
    'participle',
    'noun',
    'adjective',
    'pronoun',
    'numerals',
    'adverb',
    'preposition',
    'conjunction',
    'phrasal verb',
    'functional phrase',
  ];

  const handleSelectChange = (selectedValue: string) => {
    setSelect(selectedValue);
    console.log('selectedValue', selectedValue);
  };
  console.log('search', search);

  return (
    <>
      <InputBox>
        <Input
          placeholder="Find the word"
          onChange={e => setSearch(e.target.value)}
        />
        <IconSvgStyled icon="search" stroke="black" size="20px" />
      </InputBox>
      <SelectField
        holder="Categories"
        categories={categories}
        onSelectChange={handleSelectChange}
      />
      <RadioBlock>
        <RadioBox>
          <Label active={radio === 'Regular'}>
            <RadioInput
              type="radio"
              name="werb"
              value="Regular"
              checked={radio === 'Regular'}
              onChange={() => setRadio('Regular')}
            />
            Regular
          </Label>
          <IconBox active={radio === 'Regular'}>
            <IconDot active={radio === 'Regular'} />
          </IconBox>
        </RadioBox>
        <RadioBox>
          <Label active={radio === 'Irregular'}>
            <RadioInput
              type="radio"
              name="werb"
              value="Irregular"
              checked={radio === 'Irregular'}
              onChange={() => setRadio('Irregular')}
            />
            Irregular
          </Label>
          <IconBox active={radio === 'Irregular'}>
            <IconDot active={radio === 'Irregular'} />
          </IconBox>
        </RadioBox>
      </RadioBlock>
      <ToStudy>
        To study: <ValueWord>{totalCount}</ValueWord>
      </ToStudy>
      <BtnBox>
        <button type="button">
          <BtnName>
            Add Word <IconSvg icon="plus" stroke="var(--green)" size="20px" />
          </BtnName>
        </button>
        <Link to={TRAINING_ROUTE}>
          <BtnName>
            Train oneself
            <IconSvg icon="arrow-right" stroke="var(--green)" size="20px" />
          </BtnName>
        </Link>
      </BtnBox>
    </>
  );
};

export default Filter;
