import { Container, Div, Text, PurchaseButton } from './Styles';
import React, {ReactElement} from 'react';

const Purchase: React.FC = (): ReactElement => {
   return (
      <Container>
         <Div>
            <PurchaseButton target="blank" href='#'>Comprar agora</PurchaseButton>
            <Text>A gestão do seu negócio mais fácil</Text>
         </Div>
      </Container>
   )
}

export default Purchase;
