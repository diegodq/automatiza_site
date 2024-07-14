import { ReactElement } from "react";
import { Container, NumberProducts, RiShoppingCart2FillIcons,
  ProductsKart, TitleKart, PurchaseButton, DivPrice, DivPurchaseButton,
  DivTotal, Total, TotalText,
  ProductsDetails } from "./styles";


const ShoppingKart: React.FC = (): ReactElement => {
  return (
    <Container>
      <RiShoppingCart2FillIcons />
      <NumberProducts>0</NumberProducts>

      <ProductsKart>
        <TitleKart>RESUMO DO PEDIDO</TitleKart>

        <ProductsDetails>

        </ProductsDetails>

        <DivPurchaseButton>
          <PurchaseButton>Finalizar Pedido</PurchaseButton>
        </DivPurchaseButton>

        <DivPrice>
          <DivTotal>
            <TotalText>TOTAL:</TotalText>
            <Total>R$ 150,00</Total>
          </DivTotal>
        </DivPrice>
      </ProductsKart>
    </Container>
  )
}

export default ShoppingKart;