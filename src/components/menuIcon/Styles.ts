import { TbMenuDeep } from "react-icons/tb";
import { styled } from "styled-components";

export const TbMenuDeepIcon = styled(TbMenuDeep)`
   font-size: 36px;
   cursor: pointer;
   display: none;

   @media (max-width: 840px) {
      display: block;
   }
`;
