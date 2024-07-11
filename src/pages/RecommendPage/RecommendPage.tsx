import WordsTable from 'components/WordsTable/WordsTable';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { selectWordsAll } from 'store/words/wordsSelectors';
import { getWordsAllThunk } from 'store/words/wordsThunk';
import { RecommendPageBox } from './RecommendPage.styled';

const RecommendPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const resultAction = async () => {
      const data = {
        keyword: '',
        category: '',
        isIrregular: false,
        page: 2,
        limit: 7,
      };
      await dispatch(getWordsAllThunk(data));
    };
    resultAction();
  }, [dispatch]);

  const words = useSelector(selectWordsAll);
  console.log('words', words);

  return (
    <RecommendPageBox>
      <WordsTable words={words} />
    </RecommendPageBox>
  );
};

export default RecommendPage;
