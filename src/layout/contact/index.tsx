import {Container, TitleSection, SubTitleSection, Paragraph} from './styles.ts';
import ContactForm from '../../components/contactForm/index.tsx';
import React, {ReactElement} from 'react';

const Contact: React.FC = (): ReactElement => {
  return (
    <Container id="contact">
      <TitleSection>CONTATE-NOS</TitleSection>
      <SubTitleSection>
        Nós apreciamos sua visita e estamos sempre aqui para ajudá-lo.
        Se você tiver alguma proposta, dúvida, problema ou qualquer outra questão,
        por favor, não hesite em nos contatar.
      </SubTitleSection>
      <Paragraph>Campos com <b style={{color: 'red',}}>*</b> são obrigatórios.</Paragraph>
      <ContactForm />
    </Container>
  )
}

export default Contact;
