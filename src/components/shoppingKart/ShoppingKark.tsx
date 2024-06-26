import { ReactElement } from "react";
import { Container, NumberProducts } from "./Styles";
import { RiShoppingCart2Fill } from "react-icons/ri";

const ShoppingKart: React.FC = (): ReactElement => {
  return (
    <Container>
      <RiShoppingCart2Fill />
      <NumberProducts>0</NumberProducts>
    </Container>
  )
}

export default ShoppingKart;