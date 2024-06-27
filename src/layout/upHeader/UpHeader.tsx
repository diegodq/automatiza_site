import React, {ReactElement} from 'react';
import { Container, SocialMedia, Link, MailTo, Phone, Address, MdLocationPinIcon, FaPhoneAltIcon,
   IoMdMailOpenIcon, Ul, Li } from './Styles';
import {FaFacebook, FaLinkedin} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const UpHeader: React.FC = (): ReactElement => {
  return (
    <Container>
      <Ul>
        <Li><Address><MdLocationPinIcon />Edificio Easy - R. das Pitangueiras, 5/6 - Águas Claras</Address></Li>
        <Li><Phone href='tel:6199999999'><FaPhoneAltIcon /> (61) 9999-9999</Phone></Li>
        <Li><MailTo href='mailto:contato@automatizafacil.com.br'><IoMdMailOpenIcon />contato@automatizafacil.com.br</MailTo></Li>
      </Ul>

      <SocialMedia>
        <Link target='blank' href='#'><FaFacebook /></Link>
        <Link target='blank' href='#'><AiFillInstagram /></Link>
        <Link target='blank' href='#'><FaLinkedin /></Link>
      </SocialMedia>
    </Container>
  )
}

export default UpHeader;
