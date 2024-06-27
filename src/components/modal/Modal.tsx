import React, {ReactElement, ReactNode, useEffect} from 'react';
import { ModalBackground, ModalContent, ModalControl, IoCloseIcon, ModalText } from './Styles';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, isOpen }: ModalProps): ReactElement | null => {
  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };

  }, [isOpen]);

  if(isOpen) {
    return (
      <ModalBackground>
        <ModalContent>
          <ModalControl>
            <IoCloseIcon onClick={onClose}>Fechar</IoCloseIcon>
          </ModalControl>
          <ModalText>
            { children }
          </ModalText>
        </ModalContent>
      </ModalBackground>
    )
  }

  return null;
}

export default Modal;
