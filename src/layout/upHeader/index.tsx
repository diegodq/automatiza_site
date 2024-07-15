import React, {ReactElement, useEffect, useState} from 'react';
import { Container, SocialMedia, Link, MailTo, Phone, Address, MdLocationPinIcon, FaPhoneAltIcon,
   IoMdMailOpenIcon, Ul, Li } from './styles';
import {FaFacebook, FaLinkedin} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import ModalMessage from '../../components/modalMessage';

type openModalType = {
  (modalName: string, message: string): void
}

type CloseModal = {
  (): void;
}

const UpHeader: React.FC = (): ReactElement => {
  const[openModal, setOpenModal] = useState<string | null>(null);
  const[modalMessage, setModalMessage] = useState<string>('');

  const openModalHandler: openModalType = (modalName: string, message: string): void => {
    setOpenModal(modalName);
    setModalMessage(message);
  }

  const closeModalHandler: CloseModal = (): void => {
    setOpenModal(null);
  }

  useEffect(() => {
    const listLinks: NodeListOf<Element> = document.querySelectorAll('.linksSocial');

    listLinks.forEach(link => {
      link.addEventListener('click', (event)=> {
        event.preventDefault();
        openModalHandler('modalMessage', 'Aguarde. Em breve nossas redes sociais estarão funcionando.');
      })
    });
  }, []);
  return (
    <Container>
      <Ul>
        <Li><Address><MdLocationPinIcon />Edificio Easy - R. das Pitangueiras, 5/6 - Águas Claras</Address></Li>
        <Li><Phone href='tel:6199999999'><FaPhoneAltIcon /> (61) 9999-9999</Phone></Li>
        <Li><MailTo href='mailto:contato@automatizafacil.com.br'><IoMdMailOpenIcon />contato@automatizafacil.com.br</MailTo></Li>
      </Ul>

      <SocialMedia>
        <Link className='linksSocial' target='_blank' href='#'><FaFacebook /></Link>
        <Link className='linksSocial' target='_blank' href='#'><AiFillInstagram /></Link>
        <Link className='linksSocial' target='_blank' href='#'><FaLinkedin /></Link>
      </SocialMedia>

      <ModalMessage isOpen={openModal === 'modalMessage'} onClose={closeModalHandler} message={modalMessage} />
    </Container>
  )
}

export default UpHeader;
