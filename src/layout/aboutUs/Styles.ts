import styled from 'styled-components';
import { IoMdPlay } from "react-icons/io";

export const Container = styled.div`
   padding: 50px 0;
   background-color: #F8F8F8;
`;

export const TitleSection = styled.h3`
   font: 1.5rem bahnschriftBold, sans-serif;
   text-align: center;
`;

export const Div = styled.div`
   max-width: 500px;
   padding: 0 15px;
   display: flex;
   flex-direction: column;
   align-items: start;

   @media (max-width: 1090px) {
      flex-direction: column;
      align-items: center;
   }
`;

export const DivVideo = styled.div`
   position: relative;
   padding: 0 18px;

   @media (max-width: 1090px) {
      margin-top: 20px;
   }
`;

export const DivAboutUs = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 30px;

   @media (max-width: 1090px) {
      flex-direction: column;
      align-items: center;
   }
`;

export const ImgVideo = styled.img`
   width: 100%;
`;

export const H4 = styled.h4`
   font: bold 1.4rem bahnschriftBold, sans-serif;
   color: #303d3d;
   margin-top: 8px;
   display: block;
   text-align: center;
`;

export const P = styled.p`
   font: 1rem bahnschriftRegular, sans-serif;
   color: #303d3d;
   margin-top: 8px;

   @media (max-width: 1090px) {
      text-align: center;
      display: block;
   }
`;

export const ButtonPlay = styled.button`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   padding: 19px 21px;
   border-radius: 50%;
   border: 3px solid white;
   background-color: rgba(0,0,0,0.5);
   cursor: pointer;
   display: inline-block;

   &:hover {
      border: 3px solid red;
      transition: .3s all;
      color: red;
   }
`;

export const ContactButton = styled.a`
   background-color: #F8F8F8;
   border: 1px solid #BFBFBF;
   padding: 15px 30px;
   display: inline-block;
   font: 1rem bahnschriftRegular, sans-serif;
   text-decoration: none;
   color: black;
   cursor: pointer;
   margin-top: 50px;

   @media (max-width: 1090px) {

   }

   &:hover {
      background-color: red;
      color: white;
      transition: .4s all;
      border: 1px solid red;
   }
`;

// icons
export const IoMdPlayIcon = styled(IoMdPlay)`
   font-size: 30px;
   color: red;
`;
