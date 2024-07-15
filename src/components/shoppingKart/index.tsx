import { ReactElement } from "react";
import { Container, NumberProducts, RiShoppingCart2FillIcons,
  ProductsKart, TitleKart, PurchaseButton, DivPrice, DivPurchaseButton,
  DivTotal, Total, TotalText, ProductDetails, DivDetails,
  ImgProduct, TitleProduct, PriceProduct, RemoveProductButton } from "./styles";

const img = '/assets/images/nps.jpg';


const ShoppingKart: React.FC = (): ReactElement => {
  return (
    <Container>
      <RiShoppingCart2FillIcons />
      <NumberProducts>0</NumberProducts>

      <ProductsKart>
        <TitleKart>RESUMO DO PEDIDO</TitleKart>

        <ProductDetails>
          <ImgProduct src={img} alt="" height={47} />
          <DivDetails>
            <TitleProduct>Pesquisa de Satisfação</TitleProduct>
            <PriceProduct>R$ 180,00</PriceProduct>
            <RemoveProductButton>Remover do Carrinho</RemoveProductButton>
          </DivDetails>
        </ProductDetails>

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