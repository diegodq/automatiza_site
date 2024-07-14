import React, {ReactElement, ReactNode, useEffect} from 'react';
import { ModalBackground, ModalContent, ModalText, CloseButton } from './styles';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const ModalMessageError: React.FC<ModalProps> = ({ children, onClose, isOpen }: ModalProps): ReactElement | null => {
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
          <ModalText>
            { children }
          </ModalText>
          <CloseButton onClick={onClose}>OK</CloseButton>
        </ModalContent>
      </ModalBackground>
    )
  }

  return null;
}

export default ModalMessageError;
