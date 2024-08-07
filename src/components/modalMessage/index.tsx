import React, {ReactElement, useEffect} from 'react';
import { ModalBackground, ModalContent, ModalText, CloseButton } from './styles';

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
  message: string;
}

const ModalMessage: React.FC<ModalProps> = ({ onClose, isOpen, message }: ModalProps): ReactElement | null => {
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
            { message }
          </ModalText>
          <CloseButton onClick={onClose}>OK</CloseButton>
        </ModalContent>
      </ModalBackground>
    )
  }

  return null;
}

export default ModalMessage;
