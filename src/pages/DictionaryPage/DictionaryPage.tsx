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
import {
  selectCatigoriesWords,
  selectSearchWords,
  selectTotalCount,
  selectWordsOwn,
} from 'store/words/wordsSelectors';
import WordsTableDictionary from 'components/WordsTableDictionary/WordsTableDictionary';
import Dashboard from 'components/Dashboard/Dashboard';

const DictionaryPage = () => {
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch<AppDispatch>();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    const data = {
      keyword: '',
      category: '',
      isIrregular: false,
      page,
      limit: 7,
    };
    const resultAction = async () => {
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
  }, [dispatch]);

  const wordsOwn = useSelector(selectWordsOwn);
  const totalCount = useSelector(selectTotalCount);

  const searchWords = useSelector(selectSearchWords);
  const searchCatigoriesWords = useSelector(selectCatigoriesWords);
  
  if (loading) {
    return <LoaderPercent />;
  }

  return (
    <Back>
      <DictionaryPageBox>
        <Dashboard totalCount={totalCount} />
        <WordsTableDictionary words={searchCatigoriesWords} />
        <Pagination
          currentPage={currentPage}
          totalPages={wordsOwn.totalPages}
          onPageChange={handlePageChange}
        />
      </DictionaryPageBox>
    </Back>
  );
};

export default DictionaryPage;
