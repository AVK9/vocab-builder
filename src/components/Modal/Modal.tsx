import { Popup, Backdrop, CloseBtn } from './Modal.styled';
import { useEffect, useState } from 'react';
import { IconSvg } from 'components/common/IconSvg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setTimeout(onClose, 500);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
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

  // useEffect(() => {
  //   if (user) {
  //     onClose();
  //   }
  // }, [onClose, user]);

  if (!isOpen) return null;

  return (
    <Backdrop isOpen={isOpen} onClick={handleBackdropClick}>
      <Popup isOpen={isOpen}>
        <CloseBtn onClick={handleClose}>
          <IconSvg size="32px" icon="close" stroke="black" />
        </CloseBtn>
        <div>{children}</div>
      </Popup>
    </Backdrop>
  );
};

export default Modal;
