import {Container, TitleSection, SubTitleSection} from './Styles.ts';
import ContactForm from '../../components/contactForm/ContactForm.tsx';
import React, {ReactElement} from 'react';

const Contact: React.FC = (): ReactElement => {
   return (
      <Container id="contact">
         <TitleSection>CONTATE-NOS</TitleSection>
         <SubTitleSection>Nós apreciamos sua visita e estamos sempre aqui para ajudá-lo.
         Se você tiver alguma proposta, dúvida, problema ou qualquer outra questão,
         por favor, não hesite em nos contatar.</SubTitleSection>

         <ContactForm />
      </Container>
   )
}

export default Contact;
