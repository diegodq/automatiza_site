import styled from "styled-components";


export const Container = styled.div`
   width: 100%;
   background-color: #461D56;
   padding: 50px 0;
`;
export const Div = styled.div`
   max-width: 600px;
   margin:0 auto;
   
   @media (max-width: 650px) {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

export const Text = styled.span`
   font: 1.5rem bahnschriftRegular, sans-serif;
   color: white;

   @media (max-width: 420px) {
      font-size: 1.3rem;
      display: block;
      text-align: center;
   }
`;

export const PurchaseButton = styled.a`
   font: 1.2rem bahnschriftBold, sans-serif;
   color: black;
   text-decoration: none;
   border: 1px solid white;
   padding: 18px 23px;
   background-color: #fff;
   margin-right: 25px;

   @media (max-width: 650px) {
      margin-bottom: 20px;
   }

   &:hover {
      background-color: #461D56;
      border: 1px solid #fff;
      transition: .3s ease-in-out;
      color: #fff;
   }
`;
