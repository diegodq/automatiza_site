import { FaChevronRight, FaPhoneAlt } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.div`
   padding: 50px 0;
   background-color: #3D194F;
   display: flex;
   justify-content: space-around;

   @media (max-width: 1130px) {
      flex-direction: column;
      align-items: center;
   }
`;

export const Div = styled.div`
   @media (max-width: 1130px) {
      margin-top: 30px;
   }
`;

export const SocialDiv = styled.div`
    margin-top: 15px;
`;

export const DivTitle = styled.h4`
   font: 1.4rem bahnschriftBold, sans-serif;
   color: #f5f3f2;

   @media (max-width: 1130px) {
      display: block;
      text-align: center;
   }
`;

export const LogoFooter = styled.img`
   height: 80px;
   display: block;
   margin: 0 auto;
`;

export const DescriptionCompanyFooter = styled.p`
   width: 300px;
   font: 1.1rem bahnschriftRegular, sans-serif;
   color: #f5f3f2;
   text-align: center;
   margin-top: 20px;
`;

export const Nav = styled.nav`
   margin-top: 20px;

`;

export const Ul = styled.ul`
   margin-top: 20px;
`;

export const UlInformation = styled.ul`
   margin-top: 20px;
`;

export const Li = styled.li`
   & + & {
      margin-top: 10px;
   }
`;

export const LiInformation = styled.li`
   @media (max-width: 1130px) {
      display: flex;
      justify-content: center;
   }

   & + & {
      margin-top: 10px;
   }
`;

export const Address = styled.address`
   display: flex;
   align-items: center;
   font: 1.1rem bahnschriftRegular, sans-serif;
   color: #f5f3f2;
   text-decoration: none;
`;

export const LinkSocial = styled.a`
   font-size: 30px;
   text-decoration: none;
   color: #fff;

   & + & {
      margin-left: 20px;
   }
`;

export const QuickLink = styled.a`
   display: flex;
   align-items: center;
   font: 1rem bahnschriftRegular, sans-serif;
   color: #f5f3f2;
   text-decoration: none;
`;

export const MailTo = styled.a`
   display: flex;
   align-items: center;
   font: 1.1rem bahnschriftRegular, sans-serif;
   color: #f5f3f2;
   text-decoration: none;
`;

export const Whatsapp = styled.a`
   display: flex;
   align-items: center;
   font: 1.1rem bahnschriftRegular, sans-serif;
   color: #f5f3f2;
   text-decoration: none;
`;

// icons
export const MdLocationPinIcon = styled(MdLocationPin)`
   font-size: 21px;
   margin-right: 5px;
`;

export const FaPhoneAltIcon = styled(FaPhoneAlt)`
   font-size: 20px;
   margin-right: 5px;
`;

export const IoMdMailOpenIcon = styled(IoMdMailOpen)`
   font-size: 21px;
   margin-right: 5px;
`;

export const FaChevronRightIcon = styled(FaChevronRight)`
   margin-right: 2px;
`;
