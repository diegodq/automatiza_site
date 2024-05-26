import styled from 'styled-components';
import { IoClose } from "react-icons/io5";

export const ModalBackground = styled.div`
   background-color: rgb(0,0,0, 0.7);
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 2;
`;

export const ModalContent = styled.div`
   background-color: #F2F2F2;
   border-radius: 3px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 560px;
   height: 530px;
   overflow-y: auto;

   @media (max-width: 640px) {
      width: 90%;
   }
`;

export const ModalText = styled.div`
   padding: 16px 20px;
`;

export const ModalControl = styled.div`
   position: relative;
   top: 0;
   display: flex;
   justify-content: end;
   padding: 5px 9px;
`;

// icons
export const IoCloseIcon = styled(IoClose)`
   font-size: 28px;
   cursor: pointer;
`;
