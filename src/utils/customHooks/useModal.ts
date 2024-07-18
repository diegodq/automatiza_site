import { useState } from "react";

type OpenModal = (modalName: string, message: string) => void;

type CloseModal = () => void;

const useModal = () => {
  const[openModal, setOpenModal] = useState<string | null>(null);
  const[modalMessage, setModalMessage] = useState<string>('');

  const openModalHandler: OpenModal = (modalName: string, message: string): void => {
    setOpenModal(modalName);
    setModalMessage(message);
  }

  const closeModalHandler: CloseModal = (): void => {
    setOpenModal(null);
  }

  return {
    openModal,
    modalMessage,
    openModalHandler,
    closeModalHandler
  }
}

export default useModal;