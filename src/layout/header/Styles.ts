import styled from 'styled-components';

export const Container = styled.header`
   height: 76px;
   background-color: #FFFFFF;
   display: flex;
   justify-content: space-around;
   align-items: center;
   border-bottom: 1px solid #3D194F;

   @media (max-width: 840px) {
      justify-content: space-between;
      padding: 0 30px;
   }
`;
