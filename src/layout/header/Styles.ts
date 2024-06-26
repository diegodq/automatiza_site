import styled from 'styled-components';

export const Container = styled.header`
   height: 76px;
   background-color: #FFFFFF;
   display: flex;
   justify-content: space-around;
   align-items: center;
   border-bottom: 2px solid #3D194F;

   @media (max-width: 840px) {
      justify-content: space-between;
      padding: 0 30px;
      z-index: 4;
   }
`;

export const LogoImg = styled.img`
  height: 60px;
`;

export const Link = styled.a`

`;