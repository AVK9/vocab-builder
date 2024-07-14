import { useEffect } from 'react';
import { Backdrop, Illustration, Popup } from './MenuMobile.styled';
import UserBar from './UserBar';
import UserNav from './UserNav';

interface HeaderMobProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMobile: React.FC<HeaderMobProps> = ({ isOpen, onClose }) => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    // if (isOpen) {
    //   document.body.style.overflow = 'hidden';
    // }
    // return () => {
    // document.body.style.overflow = 'unset';
    // };
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

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={handleBackdropClick} />
      <Popup
        isOpen={isOpen}
        className={isOpen ? 'menu showHeaderMobile' : 'menu'}
      >
        <UserBar onClose={onClose} />
        <UserNav onClose={onClose} />
        <Illustration />
      </Popup>
    </>
  );
};

export default MenuMobile;
