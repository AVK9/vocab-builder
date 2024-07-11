import { LoaderPercent } from 'components/Loader/LoaderPercent';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { refreshThunk } from 'store/auth/authThunk';
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

const DictionaryPage = () => {
  const token = useSelector(isAuthSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const data = {
      keyword: '',
      category: '',
      isIrregular: false,
      page: 1,
      limit: 7,
    };
    // dispatch(getWordsCategoriesThunk());
    // dispatch(getWordsAllThunk(data));
    dispatch(getWordsOwnThunk(data));
  }, []);

  if (loading) {
    return <LoaderPercent />;
  }

  return <div>DictionaryPage</div>;
};

export default DictionaryPage;
