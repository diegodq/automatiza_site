import { FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
   background-image: url('/assets/images/background-statistic.jpg');
   min-height: 380px;
   width: 100%;
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const TitleSection = styled.h3`
   color: #fff;
   padding-right: 30px;
   padding-left: 20px;
   text-align: center;
   font:bold 1.4rem bahnschriftBold, sans-serif;
`;

export const Div = styled.div`
   display: flex;
   margin-top: 50px;
   padding-left: 8px;
   padding-right: 8px;
`;

export const Box = styled.div`
   & + & {
      margin-left: 20px;
   }
`;

export const StatisticNumber = styled.span`
   color: white;
   font: bold 3rem bahnschriftBold, sans-serif;
`;

export const Text = styled.p`
   color: white;
   font: 1rem bahnschriftRegular, sans-serif;
`;

export const ButtonService = styled.a`
   padding: 10px 16px;
   border: 1px solid #fff;
   border-radius: 5px;
   color: #fff;
   font: 1rem bahnschriftRegular, sans-serif;
   display: flex;
   justify-content: center;
   align-items: center;
   text-decoration: none;
   margin-top: 38px;
   cursor: pointer;

   &:hover {
      background-color: #fff;
      color: #000000;
      transition: .3s ease-in-out;
   }
`;

export const FaArrowRightIon = styled(FaArrowRight)`
   margin-left: 5px;
`;
