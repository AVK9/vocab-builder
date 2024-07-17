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
} from 'store/words/wordsThunk';
import { DictionaryPageBox } from './DictionaryPage.styled';
import Pagination from 'components/Pagination/Pagination';
import { selectWordsOwn } from 'store/words/wordsSelectors';
import WordsTableDictionary from 'components/WordsTableDictionary/WordsTableDictionary';

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
    };
    resultAction();
    // console.log('totalPages', resultAction);
  }, [dispatch]);

  const words = useSelector(selectWordsOwn);
  console.log('words', words.totalPages);

  if (loading) {
    return <LoaderPercent />;
  }

  return (
    <Back>
      <DictionaryPageBox>
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
