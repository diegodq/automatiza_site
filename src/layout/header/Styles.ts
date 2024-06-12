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

export const DivLogo = styled.a`
  background-color: white;
  position: absolute;
  top: 45px;
  left: 8px;
  border-radius: 5px;
  z-index: 900;
  box-shadow: 0 0 15px black;
`;

export const LogoImg = styled.img`
  height: 140px;
`;