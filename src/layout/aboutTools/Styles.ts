import { FaClock, FaLightbulb } from 'react-icons/fa';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import { GrServices } from 'react-icons/gr';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { TbPackages } from 'react-icons/tb';
import styled from 'styled-components';

export const Container = styled.div`
   padding: 50px 0;
`;

export const TitleSection = styled.h2`
   font: 1.5rem bahnschriftBold, sans-serif;
   text-align: center;
`;

export const Div = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 20px;
   margin-right: 18px;
   margin-left: 20px;

   @media (max-width: 705px) {
      flex-direction: column;
      align-items: center;
   }

`;

export const Box = styled.div`
   width: 300px;
   height: 250px;
   padding: 15px 15px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   &:hover {
      box-shadow: 0 0 5px #878787;
      transition: .2s ease-in-out;
   }
`;

export const TitleBox = styled.h5`
   font: bold 1.4rem bahnschriftBold, sans-serif;
   color: #303d3d;
   margin-top: 8px;
`;

export const Description = styled.p`
   font: 1rem bahnschriftRegular, sans-serif;
   color: #303d3d;
   display: block;
   text-align: center;
   margin-top: 8px;
`;

export const CircleIcon = styled.div`
   background-color: #edae00;
   padding: 15px 17px;
   border-radius: 100%;
`;

// icons
export const IoMdCheckmarkCircleIcon = styled(IoMdCheckmarkCircle)`
   color: #fff;
   font-size: 43px;
`;

export const TbPackagesIcon = styled(TbPackages)`
   color: #fff;
   font-size: 43px;
`;

export const FaLightbulbIcon = styled(FaLightbulb)`
   color: #fff;
   font-size: 43px;
`;

export const GrServicesIcon = styled(GrServices)`
   color: #fff;
   font-size: 43px;
`;

export const FaMoneyBill1WaveIcon = styled(FaMoneyBill1Wave)`
   color: #fff;
   font-size: 43px;
`

export const FaClockIcon = styled(FaClock)`
   color: #fff;
   font-size: 43px;
`;
