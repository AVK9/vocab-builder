import { useEffect } from 'react';
import { Backdrop, Illustration, Popup, Box } from './MenuMob.styled';
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
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={handleBackdropClick} />
      <Popup isOpen={isOpen}>
        <UserBar handleClose={handleClose} />
        <UserNav handleClose={handleClose} />
        {/* <Box></Box> */}
        <Illustration />
      </Popup>
    </>
  );
};

export default MenuMob;
