import { LoaderPercent } from 'components/Loader/LoaderPercent';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { refreshThunk } from 'store/auth/authThunk';
import { isAuthSelector, profileSelector } from 'store/auth/selectors';
import { AppDispatch } from 'store/store';

const DictionaryPage = () => {
  const token = useSelector(isAuthSelector);
  const profile = useSelector(profileSelector);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (token && !profile) {
      dispatch(refreshThunk());
    }
  }, [token, profile, dispatch]);

  return <div>DictionaryPage</div>;
};

export default DictionaryPage;
