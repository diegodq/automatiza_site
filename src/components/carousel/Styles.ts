import styled from 'styled-components';

export const Container = styled.div`

`;


export const ImgOne = styled.img`
   width: 100%;
   height: 570px;
   object-fit: cover;
`;

export const DivModal = styled.div`
   position: relative;
`;

export const DivModalObjects = styled.div`
   position: absolute;
   top: 20px;
   left: 20px;
   color: white;
   background-color: rgb(0,0,0, 0.5);
   width: 490px;
   padding: 20px;

   @media (max-width: 570px) {
      width: 280px;
   }
`;

export const TitleTextModal = styled.h3`
   font: 1.4rem bahnschriftRegular, sans-serif;

`;

export const TextModal = styled.p`
   font: 1.1rem bahnschriftRegular, sans-serif;
   margin-top: 10px;
`;

export const ReadMoreButtonModal = styled.button`
   background-color: blue;
   color: white;
   border: 0;
   font: 1rem bahnschriftRegular, sans-serif;
   cursor: pointer;
   padding: 9px 12px;
   margin-top: 15px;
`;
