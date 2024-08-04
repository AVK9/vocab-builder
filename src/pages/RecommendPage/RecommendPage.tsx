import WordsTable from 'components/WordsTable/WordsTable';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { selectWordsAll } from 'store/words/wordsSelectors';
import { getWordsAllThunk } from 'store/words/wordsThunk';
import { RecommendPageBox } from './RecommendPage.styled';
import Back from 'components/common/Back';
import Pagination from 'components/Pagination/Pagination';

const RecommendPage = () => {
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
      await dispatch(getWordsAllThunk(data));
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
      await dispatch(getWordsAllThunk(data));
    };
    resultAction();
  }, [dispatch]);

  const words = useSelector(selectWordsAll);

  return (
    <Back>
      <RecommendPageBox>
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
