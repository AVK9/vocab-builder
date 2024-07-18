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
    setTimeout(onClose, 800);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      handleClose();
    }
  };

  const calculateScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
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
      if (
        event.key === 'Escape' ||
        event.key === ' ' ||
        event.code === 'Space'
      ) {
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
    <Backdrop isOpen={isOpen} onClick={handleBackdropClick}>
      <Popup isOpen={open}>
        <CloseBtn onClick={handleClose}>
          <IconSvg size="24px" icon="x" stroke="white" />
        </CloseBtn>
        <div>{children}</div>
      </Popup>
    </Backdrop>
  );
};

export default Modal;
