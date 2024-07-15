import React, {ReactElement, useEffect, useState} from 'react';
import { Nav, Ul, Li, Link, FaUserIcon } from './styles.ts';
import CloseMenu from '../closeMenu/index.tsx';
import ModalMessage from '../modalMessage/index.tsx';

interface MenuProps {
  isActive: boolean;
  toggleActive: () => void;
}

type OpenModalType = {
  (modalName: string, message: string): void
}

type CloseModal = {
  (): void;
}

const MenuHeader: React.FC<MenuProps> = ({ isActive, toggleActive }: MenuProps): ReactElement => {
  const appMode: string = import.meta.env.VITE_APP_MODE;
  const localApp: string = import.meta.env.VITE_APP_LOCAL_APP;
  const webApp: string = import.meta.env.VITE_APP_WEB_APP;

  const [openModal, setOpenModal] = useState<string | null>(null);
  const [modalMessage, setModalMessage] = useState<string>('');

  const openModalHandler: OpenModalType = (modalName: string, message: string): void => {
    setOpenModal(modalName);
    setModalMessage(message);
  }

  const closeModalHandler: CloseModal = (): void => {
    setOpenModal(null);
  }

  useEffect((): void => {
    const serviceClientButton: Element | null = document.querySelector('.clientAreaClick');

    const checkServiceIsOn: () => void = (): void => {
      fetch(appMode == 'development' ? localApp : webApp)
      .then(response  => response)
      .then((): Window | null => window.open(appMode == 'development' ? localApp : webApp, '_blank'))
      .catch((): void => openModalHandler('modalMessageError',
        'O serviço não está respondendo no momento. Assim que for normalizado você será notificado por e-mail. Aguarde.'));
    }

    serviceClientButton!.addEventListener('click',() => checkServiceIsOn());
  }, [appMode, localApp, webApp]);

  return (
    <Nav className={isActive ? 'active' : ''}>
      <CloseMenu onClick={toggleActive} />

      <Ul>
        <Li> <Link href="/">INÍCIO</Link> </Li>
        <Li> <Link href="#about">QUEM SOMOS</Link> </Li>
        <Li> <Link href="#solutions">SOLUÇÕES</Link> </Li>
        <Li> <Link href="#contact">CONTATO</Link> </Li>
        <Li> <Link className="clientAreaClick"><FaUserIcon />ÁREA DO CLIENTE</Link> </Li>
      </Ul>

      <ModalMessage isOpen={openModal === 'modalMessageError'} onClose={closeModalHandler} message={modalMessage} />
    </Nav>
  )
}

export default MenuHeader;
