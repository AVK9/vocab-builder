import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from './ModalContext';
import { Backdrop, CloseBtn, Popup } from './ModalWin.styled';
import { IconSvg } from 'components/common/IconSvg';

const ModalWin: React.FC = () => {
  const { modalContent, closeModal, isOpen } = useModal();
  const modalRoot = document.getElementById('modal-root');

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setTimeout(closeModal, 800);
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
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!modalRoot || !modalContent) return null;

  return createPortal(
    <Backdrop
      className="modal-overlay"
      isOpen={isOpen}
      onClick={handleBackdropClick}
    >
      <Popup className="modal-content" isOpen={open}>
        <CloseBtn onClick={handleClose}>
          <IconSvg size="24px" icon="x" stroke="white" />
        </CloseBtn>
        {modalContent}
      </Popup>
    </Backdrop>,
    modalRoot
  );
};

export default ModalWin;
