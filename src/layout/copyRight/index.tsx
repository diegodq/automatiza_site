import {Container, TitleSection} from './styles.ts';
import React, {ReactElement} from 'react';

const CopyRight: React.FC = (): ReactElement => {
   return (
      <Container>
         <TitleSection>Copyright © 2024 · Automatiza © Todos os direitos reservados.</TitleSection>
      </Container>
   )
}

export default CopyRight;
