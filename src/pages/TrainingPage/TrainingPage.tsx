import React, { useEffect } from 'react';
import TrainingRoom from 'components/TrainingRoom/TrainingRoom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { getWordsTasksThunk } from 'store/words/wordsThunk';
import Back from 'components/common/Back';
import { useSelector } from 'react-redux';
import { selectLoading } from 'store/words/wordsSelectors';
import { LoaderPercent } from 'components/Loader/LoaderPercent';

const TrainingPage: React.FC = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getWordsTasksThunk());
  }, [dispatch]);

  return (
    <Back>
      {loading && <LoaderPercent />}
      <TrainingRoom />
    </Back>
  );
};

export default TrainingPage;
