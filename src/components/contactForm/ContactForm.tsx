import React, { ReactElement } from 'react';
import {Form, Input, SubmitButton, TextArea, DivInput, ErrorMessage} from './Styles.ts';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = (): ReactElement => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const formSubmit: SubmitHandler<FormData> = (data:FormData) => {
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
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
        <Input className={errors?.phone && 'input_error'} type='tel' placeholder='Telefone:'
        {...register('phone', {required: true})} />
        {errors?.phone?.type==='required' && <ErrorMessage>*Este campo é obrigatório</ErrorMessage>}
      </DivInput>

      <DivInput>
        <TextArea className={errors?.message && 'text_area_error'} placeholder='Menssagem'
        {...register('message', {required: true})}></TextArea>
        {errors?.message?.type==='required' && <ErrorMessage>*Este campo é obrigatório</ErrorMessage>}
      </DivInput>

      <SubmitButton type='submit'>Enviar</SubmitButton>
    </Form>
  )
}

export default ContactForm;
