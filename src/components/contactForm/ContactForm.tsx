import React, {ReactElement} from 'react';
import {Form, Input, SubmitButton, TextArea} from './Styles.ts';

const ContactForm: React.FC = (): ReactElement => {
   return (
      <Form action='#' method='POST'>
         <Input type='text' name='name' placeholder='Nome: *' />
         <Input type='email' name='email' placeholder='E-mail: *' />
         <Input type='tel' name='phone' placeholder='Telefone:' />
         <TextArea name='message' placeholder='Menssagem'></TextArea>
         <SubmitButton type='submit' value='Enviar' />
      </Form>
   )
}

export default ContactForm;
