import React, { useEffect, useState } from 'react';
import {
  BtnBlock,
  BtnBox,
  BtnName,
  FilterBox,
  IconSvgStyled,
  Input,
  InputBlock,
  InputBox,
  ToStudy,
  ValueWord,
} from './Dashboard.styled';
import { IconSvg } from 'components/common/IconSvg';
import { Link } from 'react-router-dom';
import { TRAINING_ROUTE } from 'utils/const';
import SelectField from 'components/common/SelectField/SelectField';
import { useSelector } from 'react-redux';
import { selectStateWordsCategories } from 'store/words/wordsSelectors';
import {
  catigoriesWordAction,
  filterWordAction,
} from 'store/words/sliceFilter';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { useModal } from 'components/ModalWin/ModalContext';
import ModalContentAddWord from '../ModalWin/ModalContentAddWord/ModalContentAddWord';

interface DashboardProps {
  totalCount: number;
}
const Dashboard: React.FC<DashboardProps> = ({ totalCount }) => {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  const [radio, setRadio] = useState('Regular');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const timerId = setTimeout(() => {
      const trimmedSearch = search.trim();
      setDebouncedSearch(trimmedSearch);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  useEffect(() => {
    if (debouncedSearch !== undefined) {
      dispatch(filterWordAction(debouncedSearch));
    }
  }, [debouncedSearch, dispatch]);

  const categories = useSelector(selectStateWordsCategories);

  const handleSelectChange = (selectedValue: string) => {
    setSelect(selectedValue);
  };

  const handleRadioChange = (radioValue: string) => setRadio(radioValue);

  useEffect(() => {
    if (select !== 'Categories') {
      dispatch(catigoriesWordAction(select));
    }
    if (select === 'verb') {
      dispatch(catigoriesWordAction(radio));
    }
    if (select === 'Categories') {
      dispatch(catigoriesWordAction('categories'));
    }
  }, [dispatch, radio, select]);

  const { openModal } = useModal();
  const { closeModal } = useModal();
  const handleOpenModal = () => {
    openModal(<ModalContentAddWord closeModal={closeModal} />);
  };

  return (
    <FilterBox>
      <InputBlock>
        <InputBox>
          <Input
            placeholder="Find the word"
            onChange={e => setSearch(e.target.value)}
          />
          <IconSvgStyled icon="search" stroke="black" size="20px" />
        </InputBox>
        <InputBox>
          <SelectField
            holder="Categories"
            categories={categories}
            onSelectChange={handleSelectChange}
            onRadioChange={handleRadioChange}
            specialStyle={true}
          />
        </InputBox>
      </InputBlock>
      <BtnBlock>
        <ToStudy>
          To study: <ValueWord>{totalCount}</ValueWord>
        </ToStudy>
        <BtnBox>
          <button type="button">
            <BtnName onClick={handleOpenModal}>
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
      </BtnBlock>
    </FilterBox>
  );
};

export default Dashboard;
