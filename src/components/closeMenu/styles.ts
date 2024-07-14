import { IoCloseSharp } from 'react-icons/io5';
import styled from 'styled-components';

export const IoCloseSharpIcon = styled(IoCloseSharp)`
  display: none;
  cursor: pointer;
  font-size: 32px;
  position: absolute;
  right: 40px;
  top: 22px;

  @media (max-width: 840px) {
    display: block;
  }

`;
