import { FaCheck, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0;
  background-color: #f2f2f2;
`;

export const ParagraphNPS = styled.p`
  font: 1rem bahnschriftRegular, sans-serif;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 1330px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivTaleImg = styled.div`
  position: relative;

  @media (max-width: 1330px) {
    margin-top: 15px;
  }
`;

export const TitleSection = styled.h2`
  font: 1.5rem bahnschriftBold, sans-serif;
  text-align: center;
`;

export const SubTitleSection = styled.span`
  text-align: center;
  display: block;
  font:1.3rem bahnschriftRegular, sans-serif;
  margin-top: 18px;
`;

export const Tale = styled.div`
  max-width: 390px;
  padding: 25px 19px;
  background-color: #fff;
  box-shadow: 0 1px 1px #525252;
  margin-top: -3px;

  &:hover {
    box-shadow: 0 9px 12px #b5b5b5;
    transition: .2s ease-in-out;
  }
`;

export const TitleTale = styled.h3`
  font: bold 1.2rem bahnschriftBold, sans-serif;
  text-align: center;
`;

export const TaleDescription = styled.p`
  font: 1rem bahnschriftRegular, sans-serif;
  text-align: center;
  margin-top: 10px;
`;

export const TaleImg = styled.img`
  width: 100%;
`;

export const Ul = styled.ul`
  margin-top: 10px;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  
`;

export const ReadMoreButton = styled.button`
  font: bold 1rem bahnschriftRegular, sans-serif;
  background-color: #FFFFFF;
  border: 0;
  cursor: pointer;
  display: flex;

  &:hover {
    color: red;
    transition: .3s ease-out;
  }
`;

export const AddToKartButton = styled.button`
  font: bold 1rem bahnschriftRegular, sans-serif;
  background-color: #FFFFFF;
  border: 0;
  cursor: pointer;
  display: flex;

  &:hover {
    color: red;
    transition: .3s ease-out;
  }
`;

export const Badge = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  background-color: red;
  padding: 5px 10px;
  color: white;
  font: bold .9rem bahnschriftRegular, sans-serif;
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 293px;
  margin-top: 12px;
`;

// icons
export const FaCheckIcon = styled(FaCheck)`
  color: green;
  margin-right: 4px;
`;

export const FaChevronRightIcon = styled(FaChevronRight)`
  color: red;
`;
