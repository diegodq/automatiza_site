import styled from "styled-components";
import { RiShoppingCart2Fill } from "react-icons/ri";

export const Container = styled.div`
  padding: 5px;
  position: relative;

  &.showCart {
    display: block;
  }
`;

export const NumberProducts = styled.span`
  font-size: 25px;
`;

export const RiShoppingCart2FillIcons = styled(RiShoppingCart2Fill)`
  font-size: 35px;
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 8px;
  border-bottom: 1px solid #8a8a8a;
`;

export const DivDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgProduct = styled.img`

`;

export const TitleProduct = styled.span`
  font: 1rem bahnschriftRegular, sans-serif;
  color: grey;
`;

export const PriceProduct = styled.span`
  font: 1.1rem bahnschriftRegular, sans-serif;
`;

export const RemoveProductButton = styled.button`
  background: none;
  border: none;
  font: 1rem bahnschriftRegular, sans-serif;
  color: blue;
  cursor: pointer;
`;

export const DivPrice = styled.div`
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivPurchaseButton = styled.div`
  border-top: 1px solid grey;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const PurchaseButton = styled.button`
  border: 0;
  background-color: black;
  color: white;
  padding: 7px 18px;
  display: inline-block;
  font: 1rem bahnschriftRegular, sans-serif;
  border-radius: 3px;
  cursor: pointer;
`;

export const ProductsKart = styled.div`
  position: absolute;
  width: 280px;
  border: 1px solid #3D194F;
  z-index: 99;
  top: 66px;
  right: 4px;
  background-color: #fff;
  padding: 15px 0;
`;

export const TitleKart = styled.h4`
  color: black;
  font: 1.1rem bahnschriftRegular, sans-serif;
  text-align: center;
`;

export const TotalText = styled.span`
  font: 1rem bahnschriftRegular, sans-serif;
`;

export const Total = styled.span`
  font: 1.1rem bahnschriftRegular, sans-serif;
`;

export const DivTotal = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  width: 230px;
`;