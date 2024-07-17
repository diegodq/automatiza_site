import React, {ReactElement, useEffect} from 'react';
import { Container, Div, DivTitle, LogoFooter, DescriptionCompanyFooter, Ul, Nav,
   Li, LinkSocial, QuickLink,SocialDiv,Address, MailTo, Whatsapp,
   MdLocationPinIcon, FaPhoneAltIcon, IoMdMailOpenIcon, FaChevronRightIcon,
   UlInformation, LiInformation} from './styles.ts'
import {FaFacebook} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

import LogoWhite from '/assets/images/logo-white2.png';

const Footer: React.FC = (): ReactElement => {
  useEffect(() => {
    const listLinks: NodeListOf<Element> = document.querySelectorAll('.linksSocial');
    listLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
      });
    });
  }, []);

  return (
    <Container>
      <Div>
        <DivTitle>Social</DivTitle>

        <SocialDiv>
          <LinkSocial className='linksSocial' target='_blank' href='#'> <FaFacebook /> </LinkSocial>
          <LinkSocial className='linksSocial' target='_blank' href='#'> <AiFillInstagram /> </LinkSocial>
          <LinkSocial className='linksSocial' target='_blank' href='#'> <FaLinkedin /> </LinkSocial>
        </SocialDiv>
      </Div>

      <Div>
        <DivTitle>Links Rápidos</DivTitle>

        <Nav>
          <Ul>
            <Li> <QuickLink href="/"> <FaChevronRightIcon />Início</QuickLink> </Li>
            <Li> <QuickLink href="#about"> <FaChevronRightIcon />Quem Somos</QuickLink> </Li>
            <Li> <QuickLink href="#solutions"> <FaChevronRightIcon />Soluções</QuickLink> </Li>
            <Li> <QuickLink href="#contact"> <FaChevronRightIcon />Contato</QuickLink> </Li>
            <Li> <QuickLink target="blank" href="https://app.automatizafacil.com.br"> <FaChevronRightIcon />Área do Cliente</QuickLink> </Li>
          </Ul>
        </Nav>
      </Div>

      <Div>
        <DivTitle>Informações</DivTitle>

        <UlInformation>
          <LiInformation> <Address><MdLocationPinIcon /> Edifício Easy - R. das Pitangueiras,<br /> 5/6 - Águas Claras.</Address> </LiInformation>
          <LiInformation> <Whatsapp href='https://wa.me/5561992437225?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20os%20servi%C3%A7os%20da%20Automatiza%20F%C3%A1cil.'> <FaPhoneAltIcon />(61) 9.9243-7225</Whatsapp> </LiInformation>
          <LiInformation> <MailTo href='mailto:contato@automatizafacil.com.br'> <IoMdMailOpenIcon />contato@automatizafacil.com.br</MailTo> </LiInformation>
        </UlInformation>
      </Div>

      <Div>
        <LogoFooter src={LogoWhite} />
        <DescriptionCompanyFooter>O objetivo da AUTOMATIZA FÁCIL é reduzir rotinas burocráticas e o excesso de planilhas, criando micros serviços independentes, intuitivos e autônomos, tornando o varejo simples ainda mais simples.</DescriptionCompanyFooter>
      </Div>
    </Container>
  )
}

export default Footer;
