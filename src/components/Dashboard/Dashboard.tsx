import React, { useRef, useState } from 'react';
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
  onSearchChange: (search: string) => void;
  onSelectChange: (select: string) => void;
  onRadioChange: (radio: boolean) => void;
}
const Dashboard: React.FC<DashboardProps> = ({
  totalCount,
  onSearchChange,
  onSelectChange,
  onRadioChange,
}) => {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  const [radio, setRadio] = useState(false);
  const debouncedSearchRef = useRef<NodeJS.Timeout | null>(null);
  // const dispatch = useDispatch<AppDispatch>();

  const searc = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setSearch(value);

    if (debouncedSearchRef.current) {
      clearTimeout(debouncedSearchRef.current);
    }

    debouncedSearchRef.current = setTimeout(() => {
      const trimmedSearch = value.trim();
      onSearchChange(trimmedSearch);
    }, 300);
  };

  // useEffect(() => {
  //   console.log('Dashboard useEffect (search)');
  //   const timerId = setTimeout(() => {
  //     const trimmedSearch = search.trim();
  //     setDebouncedSearch(trimmedSearch);
  //     onSearchChange(trimmedSearch);
  //   }, 300);

  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [search, onSearchChange]);

  // useEffect(() => {
  //   console.log('Dashboard useEffect (debouncedSearch, select)');
  //   if (debouncedSearch !== undefined) {
  //     dispatch(filterWordAction(debouncedSearch));
  //   }
  // }, [debouncedSearch, dispatch]);

  const categories = useSelector(selectStateWordsCategories);

  const handleSelectChange = (selectedValue: string) => {
    setSelect(selectedValue);
    onSelectChange(selectedValue === 'Categories' ? '' : selectedValue);
  };

  const handleRadioChange = (radioValue: boolean) => {
    setRadio(radioValue);

    onRadioChange(radioValue);
  };

  // useEffect(() => {

  //   if (select !== 'Categories') {
  //     // resultAction();
  //     dispatch(catigoriesWordAction(select));
  //   }
  //   if (select === 'verb') {
  //     console.log('radio', radio);
  //     dispatch(catigoriesWordAction(radio));
  //   }
  //   if (select === 'Categories') {
  //     dispatch(catigoriesWordAction('categories'));
  //   }
  // }, [dispatch, radio, select]);

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
            // onChange={e => setSearch(e.target.value)}
            onChange={searc}
            value={search}
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
