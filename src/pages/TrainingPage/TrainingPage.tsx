import React, { useEffect } from 'react';
import TrainingRoom from 'components/TrainingRoom/TrainingRoom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { getWordsTasksThunk } from 'store/words/wordsThunk';
import Back from 'components/common/Back';

const TrainingPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getWordsTasksThunk());
  }, [dispatch]);

  return (
    <Back>
      <TrainingRoom />
    </Back>
  );
};

export default TrainingPage;
