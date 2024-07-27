import Back from 'components/common/Back';
import { LoaderPercent } from 'components/Loader/LoaderPercent';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  isAuthSelector,
  loadingSelector,
  profileSelector,
} from 'store/auth/selectors';
import { AppDispatch } from 'store/store';
import {
  getWordsAllThunk,
  getWordsCategoriesThunk,
  getWordsOwnThunk,
  getWordsStatisticsThunk,
} from 'store/words/wordsThunk';
import { DictionaryPageBox } from './DictionaryPage.styled';
import Pagination from 'components/Pagination/Pagination';
import { selectTotalCount, selectWordsOwn } from 'store/words/wordsSelectors';
import WordsTableDictionary from 'components/WordsTableDictionary/WordsTableDictionary';
import Filter from 'components/Filter/Filter';

const DictionaryPage = () => {
  const token = useSelector(isAuthSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch<AppDispatch>();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    console.log('currentPage', page);
    const data = {
      keyword: '',
      category: '',
      isIrregular: false,
      page,
      limit: 7,
    };
    const resultAction = async () => {
      console.log('sadasdasd');
      await dispatch(getWordsOwnThunk(data));
    };
    resultAction();
  };

  useEffect(() => {
    const data = {
      keyword: '',
      category: '',
      isIrregular: false,
      page: 1,
      limit: 7,
    };
    const resultAction = async () => {
      await dispatch(getWordsOwnThunk(data));
      await dispatch(getWordsStatisticsThunk());
      await dispatch(getWordsCategoriesThunk());
    };
    resultAction();
    // console.log('totalPages', resultAction);
  }, [dispatch]);

  const words = useSelector(selectWordsOwn);
  const totalCount = useSelector(selectTotalCount);
  console.log('words', words);

  if (loading) {
    return <LoaderPercent />;
  }

  return (
    <Back>
      <DictionaryPageBox>
        <Filter totalCount={totalCount} />
        <WordsTableDictionary words={words.results} />
        <Pagination
          currentPage={currentPage}
          totalPages={words.totalPages}
          onPageChange={handlePageChange}
        />
      </DictionaryPageBox>
    </Back>
  );
};

export default DictionaryPage;
