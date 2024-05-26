import React, {ReactElement} from 'react';
import {Container, TitleSection, ListImages, Images} from './Styles.ts';

const imgOne = '/assets/images/mix_atacadao.png';
const imgTwo = '/assets/images/goncalina.png';

const Clients: React.FC = (): ReactElement => {
   return (
      <Container>
         <TitleSection>Nossos Clientes</TitleSection>
         <ListImages>
            <Images src={imgOne} />
            <Images src={imgTwo} />
         </ListImages>
      </Container>
   )
}

export default Clients;
