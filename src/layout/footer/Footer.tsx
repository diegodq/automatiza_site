import React, {ReactElement} from 'react';
import { Container, Div, DivTitle, LogoFooter, DescriptionCompanyFooter, Ul, Nav,
   Li, LinkSocial, QuickLink,SocialDiv,Address, MailTo, Phone,
   MdLocationPinIcon, FaPhoneAltIcon, IoMdMailOpenIcon, FaChevronRightIcon,
   UlInformation, LiInformation} from './Styles.ts'
import {FaFacebook} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

import LogoWhite from '/assets/images/logo-white2.png';

const Footer: React.FC = (): ReactElement => {
   return (
      <Container>
         <Div>
            <DivTitle>Social</DivTitle>

            <SocialDiv>
               <LinkSocial target='blank' href='#'> <FaFacebook /> </LinkSocial>
               <LinkSocial target='blank' href='#'> <AiFillInstagram /> </LinkSocial>
               <LinkSocial target='blank' href='#'> <FaLinkedin /> </LinkSocial>
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
               <LiInformation> <Phone href='tel:6199999999'> <FaPhoneAltIcon />(61) 9999-9999</Phone> </LiInformation>
               <LiInformation> <MailTo href='mailto:contato@example.com'> <IoMdMailOpenIcon />contato@example.com</MailTo> </LiInformation>
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
