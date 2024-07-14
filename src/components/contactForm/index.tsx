import React, { ReactElement, useCallback, useState } from 'react';
import {Form, Input, SubmitButton, TextArea, DivInput, ErrorMessage} from './styles.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import ModalMessage from '../modalMessage/index.tsx';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type EventType = React.FormEvent<HTMLInputElement>;

type HandleKeyUpType = {
  (event: EventType): void
}

type OpenModalType = {
  (modalName: string, message: string): void;
}

type CloseModal = {
  (): void;
}

const ContactForm: React.FC = (): ReactElement => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [modalMessage, setModalMessage] = useState<string>('');

  const openModalHandler: OpenModalType = (modalName: string, message: string): void => {
    setOpenModal(modalName);
    setModalMessage(message);
  }

  const closeModalHandler: CloseModal = (): void => {
    setOpenModal(null);
  }

  const handleKeyUp: HandleKeyUpType = useCallback((event: EventType ) => {
    event.currentTarget.maxLength = 15;
    let value = event.currentTarget.value;
    value = value.replace(/\D/g, "");

    if (value.length > 10) value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    else value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");

    event.currentTarget.value = value;
  }, []);

  const formSubmit: SubmitHandler<FormData> = (data:FormData) => {
    const appMode = import.meta.env.VITE_APP_MODE;
    const localAddress = import.meta.env.VITE_APP_ADDRESS;
    const webAddress = import.meta.env.VITE_APP_API_URL;

    fetch(appMode == 'development' ? localAddress + '/contact-us' : webAddress + '/contact-us' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(() => openModalHandler('contactModalMessage', 'Sua mensagem foi enviada e responderemos o mais breve possível.'))
    .catch(() => openModalHandler('contactModalMessage', 'Algo de errado aconteceu. Por favor, tente mais tarde.'));
  }

  return (
    <Form method='POST' onSubmit={handleSubmit(formSubmit)}>
      <DivInput>
        <Input className={errors?.name && 'input_error'} type='text' placeholder='Nome: *'
        {...register('name', {required: true})} />
        {errors?.name?.type==='required' && <ErrorMessage>*Este campo é obrigatório</ErrorMessage>}
      </DivInput>

      <DivInput>
        <Input className={errors?.email && 'input_error'} type='email' placeholder='E-mail: *'
        {...register('email', {required: true})} />
        {errors?.email?.type==='required' && <ErrorMessage>*Este campo é obrigatório</ErrorMessage>}
      </DivInput>

      <DivInput>
        <Input className={errors?.phone && 'input_error'} type='tel' placeholder='Telefone:' onKeyUp={handleKeyUp}
        {...register('phone', {required: true})} />
        {errors?.phone?.type==='required' && <ErrorMessage>*Este campo é obrigatório</ErrorMessage>}
      </DivInput>

      <DivInput>
        <TextArea className={errors?.message && 'text_area_error'} placeholder='Mensagem'
        {...register('message', {required: true})}></TextArea>
        {errors?.message?.type==='required' && <ErrorMessage>*Este campo é obrigatório</ErrorMessage>}
      </DivInput>

      <SubmitButton type='submit'>Enviar</SubmitButton>

      <ModalMessage isOpen={openModal === 'contactModalMessage'} onClose={closeModalHandler} message={modalMessage} />
    </Form>
  )
}

export default ContactForm;
