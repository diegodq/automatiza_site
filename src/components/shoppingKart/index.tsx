import { ReactElement, useContext, useState } from "react";
import { Container, NumberProducts, RiShoppingCart2FillIcons,
  ProductsKart, TitleKart, PurchaseButton, DivPrice, DivPurchaseButton,
  DivTotal, Total, TotalText, ProductDetails, DivDetails,
  ImgProduct, TitleProduct, PriceProduct, RemoveProductButton } from "./styles";
import AppContext, { MyContextType } from "../../context/appContext";
import formatCurrency from "../../utils/formatCurrency";
import ModalMessage from "../modalMessage";

type OpenModalType = {
  (modalName: string, message: string): void
}

type CloseModal = {
  (): void;
}

const ShoppingKart: React.FC = (): ReactElement => {
  const context: MyContextType | undefined = useContext(AppContext);

  const [openModal, setOpenModal] = useState<string | null>();
  const [modalMessage, setModalMessage] = useState<string>('');

  const openModalHandler: OpenModalType = (modalName: string, message: string) => {
    setOpenModal(modalName);
    setModalMessage(message);
  }

  const closeModalHandler: CloseModal = () => {
    setOpenModal(null);
  }

  if (!context) {
    return <></>;
  }

  const { products, setProducts } = context;

  const showShoppingCart: "showCart" | "" = products.length > 0 ? 'showCart' : '';

  const handleRemoveProducts: (id: string) => void = (id: string) => {
    setProducts(previousProduct => previousProduct.filter(product => product.id !== id));
  }

  const totalPrice: number = products.reduce((acc, product) => {
    return acc + product.price;
  },0);

  return (
    <Container className={showShoppingCart}>
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
          <PurchaseButton onClick={() => openModalHandler('modalMessage', 'Gateway de pagamento não configurado. Aguarde.')}>Finalizar Pedido</PurchaseButton>
        </DivPurchaseButton>

        <DivPrice>
          <DivTotal>
            <TotalText>TOTAL:</TotalText>
            <Total>{`${formatCurrency(totalPrice, 'BRL')}`}</Total>
          </DivTotal>
        </DivPrice>
      </ProductsKart>

      <ModalMessage isOpen={openModal === 'modalMessage'} onClose={closeModalHandler} message={modalMessage} />
    </Container>
  )
}

export default ShoppingKart;