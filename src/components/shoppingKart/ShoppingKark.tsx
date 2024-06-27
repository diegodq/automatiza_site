import { ReactElement } from "react";
import { Container, NumberProducts, RiShoppingCart2FillIcons,
  ProductsKart, TitleKart, PurchaseButton, DivProducts, DivPurchaseButton,
  DivTotal, DivSubTotal, Total, SubTotal, TotalText, SubTotalText } from "./Styles";


const ShoppingKart: React.FC = (): ReactElement => {
  return (
    <Container>
      <RiShoppingCart2FillIcons />
      <NumberProducts>0</NumberProducts>

      <ProductsKart>
        <TitleKart>RESUMO DO PEDIDO</TitleKart>

        <DivPurchaseButton>
          <PurchaseButton>Finalizar Pedido</PurchaseButton>
        </DivPurchaseButton>

        <DivProducts>
          <DivSubTotal>
            <SubTotalText>SUBTOTAL:</SubTotalText>
            <SubTotal>R$ 150,00</SubTotal>
          </DivSubTotal>
          <DivTotal>
            <TotalText>TOTAL:</TotalText>
            <Total>R$ 150,00</Total>
          </DivTotal>
        </DivProducts>
      </ProductsKart>
    </Container>
  )
}

export default ShoppingKart;