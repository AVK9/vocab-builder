import WordsTable from 'components/WordsTable/WordsTable';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import {
  selectLoading,
  selectTotalCount,
  selectWordsAll,
} from 'store/words/wordsSelectors';
import { getWordsAllThunk } from 'store/words/wordsThunk';
import { RecommendPageBox } from './RecommendPage.styled';
import Back from 'components/common/Back';
import Pagination from 'components/Pagination/Pagination';
import { LoaderPercent } from 'components/Loader/LoaderPercent';
import Dashboard from 'components/Dashboard/Dashboard';

const RecommendPage = () => {
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
      dispatch(getWordsAllThunk(data));
    },
    [dispatch]
  );
  useEffect(() => {
    fetchWords(search, select, radio, currentPage);
  }, [search, select, fetchWords, radio, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, select, radio]);

  const words = useSelector(selectWordsAll);
  const totalCount = useSelector(selectTotalCount);

  return (
    <Back>
      {loading && <LoaderPercent />}
      <RecommendPageBox>
        <Dashboard
          totalCount={totalCount}
          onSearchChange={setSearch}
          onSelectChange={setSelect}
          onRadioChange={setRadio}
        />
        <WordsTable words={words.results} />
        <Pagination
          currentPage={currentPage}
          totalPages={words.totalPages}
          onPageChange={handlePageChange}
        />
      </RecommendPageBox>
    </Back>
  );
};

export default RecommendPage;
