import { useEffect } from 'react';
import { Backdrop, Illustration, Popup } from './MenuMob.styled';
import UserBar from './UserBar';
import UserNav from './UserNav';

interface HeaderMobProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMob: React.FC<HeaderMobProps> = ({ isOpen, onClose }) => {
  const handleClose = () => {
    setTimeout(onClose, 500);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
    }
  };

  const calculateScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = calculateScrollbarWidth();
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={handleBackdropClick} />
      <Popup isOpen={isOpen}>
        <UserBar handleClose={handleClose} />
        <UserNav handleClose={handleClose} />
        <Illustration />
      </Popup>
    </>
  );
};

export default MenuMob;
