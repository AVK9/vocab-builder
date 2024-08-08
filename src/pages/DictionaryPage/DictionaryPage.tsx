import Back from 'components/common/Back';
import { LoaderPercent } from 'components/Loader/LoaderPercent';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch } from 'store/store';
import {
  getWordsCategoriesThunk,
  getWordsOwnThunk,
  getWordsStatisticsThunk,
} from 'store/words/wordsThunk';
import { DictionaryPageBox } from './DictionaryPage.styled';
import Pagination from 'components/Pagination/Pagination';
import {
  selectLoading,
  selectTotalCount,
  selectWordsOwn,
} from 'store/words/wordsSelectors';
import WordsTableDictionary from 'components/WordsTableDictionary/WordsTableDictionary';
import Dashboard from 'components/Dashboard/Dashboard';

const DictionaryPage = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch<AppDispatch>();

  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  const [radio, setRadio] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const fetchWords = useCallback(
    (
      search: string,
      select: string,
      radio: boolean | undefined,
      currentPage: number | undefined
    ) => {
      const data = {
        keyword: search,
        category: select,
        ...(select === 'verb' && { isIrregular: radio }),
        ...(currentPage !== 1 && { page: currentPage }),
      };

      dispatch(getWordsOwnThunk(data));
    },
    [dispatch]
  );

  useEffect(() => {
    const resultAction = async () => {
      await dispatch(getWordsStatisticsThunk());
      await dispatch(getWordsCategoriesThunk());
    };
    resultAction();
  }, [dispatch]);

  useEffect(() => {
    fetchWords(search, select, radio, currentPage);
  }, [search, select, fetchWords, radio, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, select, radio]);

  const wordsOwn = useSelector(selectWordsOwn);
  const totalCount = useSelector(selectTotalCount);

  return (
    <Back>
      {loading && <LoaderPercent />}
      <DictionaryPageBox>
        <Dashboard
          totalCount={totalCount}
          onSearchChange={setSearch}
          onSelectChange={setSelect}
          onRadioChange={setRadio}
        />
        <WordsTableDictionary words={wordsOwn.results} />

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
