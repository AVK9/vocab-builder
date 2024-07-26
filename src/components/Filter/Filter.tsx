import React from 'react';
import {
  BtnBox,
  BtnName,
  IconSvgStyled,
  Input,
  InputBox,
  ToStudy,
  ValueWord,
} from './Filter.styled';
import { IconSvg } from 'components/common/IconSvg';
import { Link } from 'react-router-dom';
import { TRAINING_ROUTE } from 'utils/const';
import SelectFields from 'components/common/SelectFields';

interface FilterProps {
  totalCount: number;
}
const Filter: React.FC<FilterProps> = ({ totalCount }) => {
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

  return (
    <div>
      <InputBox>
        <Input placeholder="Find the word" />
        <IconSvgStyled icon="search" stroke="black" size="20px" />
      </InputBox>
      <SelectFields
        holder="Categories"
        categories={categories}
        onChange={e => e.target}
      />
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
    </div>
  );
};

export default Filter;
