import styled from 'styled-components';
import { IoClose } from "react-icons/io5";

export const ModalBackground = styled.div`
  background-color: rgb(0,0,0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
`;

export const ModalContent = styled.div`
  background-color: #F2F2F2;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 560px;
  height: 180px;
  overflow-y: auto;
  font: 1.1rem bahnschriftRegular, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const ModalText = styled.div`
  padding: 16px 20px;
  text-align: center;
`;

export const ModalControl = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: end;
  padding: 5px 9px;
`;

export const CloseButton = styled.button`
  padding: 15px 50px;
  cursor: pointer;
  background-color: #F2F2F2;
  border: 2px solid #bfbfbf;
  font: bold 1rem bahnschriftRegular, sans-serif;
  margin: 20px auto;

  &:hover {
    background-color: red;
    color: white;
    transition: .3s ease-in-out;
    border: 2px solid red;
  }
`;

// icons
export const IoCloseIcon = styled(IoClose)`
  font-size: 28px;
  cursor: pointer;
`;
