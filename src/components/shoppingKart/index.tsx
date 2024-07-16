import { ReactElement, useContext } from "react";
import { Container, NumberProducts, RiShoppingCart2FillIcons,
  ProductsKart, TitleKart, PurchaseButton, DivPrice, DivPurchaseButton,
  DivTotal, Total, TotalText, ProductDetails, DivDetails,
  ImgProduct, TitleProduct, PriceProduct, RemoveProductButton } from "./styles";
import AppContext, { MyContextType } from "../../context/appContext";
import formatCurrency from "../../utils/formatCurrency";

const ShoppingKart: React.FC = (): ReactElement => {
  const context: MyContextType | undefined = useContext(AppContext);

  if (!context) {
    return <></>;
  }

  const { products, setProducts } = context;

  const handleRemoveProducts: (id: string) => void = (id: string) => {
    setProducts(previousProduct => previousProduct.filter(product => product.id !== id));
  }

  const totalPrice: number = products.reduce((acc, product) => {
    return acc + product.price;
  },0);

  return (
    <Container>
      <RiShoppingCart2FillIcons />
      <NumberProducts>{products.length}</NumberProducts>

      <ProductsKart>
        <TitleKart>RESUMO DO PEDIDO</TitleKart>

        {products.map(product => (
          <ProductDetails key={product.id}>
            <ImgProduct src={product.thumbnail} alt={product.title} height={47} />
            <DivDetails>
              <TitleProduct>{product.title}</TitleProduct>
              <PriceProduct>{`${formatCurrency(product.price, 'BRL')}`}</PriceProduct>
              <RemoveProductButton onClick={(): void => handleRemoveProducts(product.id)}>Remover do Carrinho</RemoveProductButton>
            </DivDetails>
          </ProductDetails>
        ))}

        <DivPurchaseButton>
          <PurchaseButton>Finalizar Pedido</PurchaseButton>
        </DivPurchaseButton>

        <DivPrice>
          <DivTotal>
            <TotalText>TOTAL:</TotalText>
            <Total>{totalPrice}</Total>
          </DivTotal>
        </DivPrice>
      </ProductsKart>
    </Container>
  )
}

export default ShoppingKart;