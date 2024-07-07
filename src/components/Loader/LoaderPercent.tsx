import { createPortal } from 'react-dom';
import { Background, Loader, Text } from './LoaderPercent.styled';
import { useEffect, useState } from 'react';

export const LoaderPercent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const simulateLoading = (): NodeJS.Timeout => {
      let progress = 0;

      const interval = setInterval(() => {
        progress += Math.random() * 20;
        setCount(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 200);
      return interval;
    };

    const interval = simulateLoading();
    return () => clearInterval(interval);
  }, []);

  const loader = document.getElementById('modal-root');
  if (!loader) {
    console.error('Modal root element not found');
    return null;
  }

  return (
    <>
      {createPortal(
        <Background>
          <Text>{count < 100 ? Math.round(count) : 100} %</Text>
          <Loader />
        </Background>,
        loader
      )}
    </>
  );
};
