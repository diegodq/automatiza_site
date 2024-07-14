import { Container, Div, Text, PurchaseButton } from './styles';
import React, {ReactElement} from 'react';

const Purchase: React.FC = (): ReactElement => {
  return (
    <Container>
      <Div>
        <PurchaseButton href="#solutions">Comprar agora</PurchaseButton>
        <Text>A gestão do seu negócio mais fácil</Text>
      </Div>
    </Container>
  )
}

export default Purchase;
