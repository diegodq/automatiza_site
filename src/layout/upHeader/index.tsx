import React, {ReactElement, useEffect, useState} from 'react';
import { Container, SocialMedia, Link, MailTo, Whatsapp, Address, MdLocationPinIcon, FaWhatsappIcon,
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
        <Li><Address><MdLocationPinIcon />Edifício Easy - R. das Pitangueiras, 5/6 - Águas Claras</Address></Li>
        <Li><Whatsapp href='https://wa.me/5561992437225?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20os%20servi%C3%A7os%20da%20Automatiza%20F%C3%A1cil.'><FaWhatsappIcon /> (61) 9.9243-7225</Whatsapp></Li>
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
