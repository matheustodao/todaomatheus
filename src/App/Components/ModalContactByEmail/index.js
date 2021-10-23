/* eslint-disable react/jsx-no-bind */
import Image from 'next/image';
import { useState } from 'react';

import useError from '../../Hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';

import { Container } from './styles';
import { Overlay } from '../Overlay';

import ModalHeader from '../ModalHeader';
import FormGroup from '../FormGroup';
import { FieldInput } from '../FieldInput';
import { Button } from '../Button';
import Portal from '../Portal';
import Loader from '../Loader';

import QueueEmailService from '../../Services/QueueEmailService';

export default function ModalContactByEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useError();

  const isDisabled = !(name && email && subject && description && errors.length === 0);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handleSubjectChange(event) {
    setSubject(event.target.value);

    if (!event.target.value) {
      setError({ field: 'subject', message: 'O assunto é obrigatório.' });
    } else {
      removeError('subject');
    }
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);

    if (!event.target.value) {
      setError({ field: 'description', message: 'A decrição é obrigatória.' });
    } else {
      removeError('description');
    }
  }

  function resetFields() {
    setName('');
    setEmail('');
    setSubject('');
    setDescription('');
  }

  async function handleSendEmail(event) {
    event.preventDefault();

    try {
      setIsLoading(true);

      await QueueEmailService.addNewQueueEmail({
        name,
        email,
        subject,
        description,
      });

      resetFields();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Portal selector="#portals">
      <Overlay>
        <Container noValidate onSubmit={handleSendEmail}>
          <Loader isLoading={isLoading} />
          <ModalHeader title="Compose" modalName="byEmail">
            <Button type="submit" disabled={isDisabled}>
              <Image src="/icons/send.svg" width={20} height={20} />
            </Button>
          </ModalHeader>
          <main>
            <FormGroup error={getErrorMessageByFieldName('name')}>
              <FieldInput error={getErrorMessageByFieldName('name')}>
                <input
                  placeholder=" "
                  id="fullName"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                <label htmlFor="fullName">Nome Completo</label>
              </FieldInput>
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('email')}>
              <FieldInput error={getErrorMessageByFieldName('email')}>
                <input
                  type="email"
                  placeholder=" "
                  id="email"
                  name="email"
                  autoComplete="off"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <label htmlFor="email">Email</label>
              </FieldInput>
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('subject')}>
              <FieldInput error={getErrorMessageByFieldName('subject')}>
                <input
                  placeholder=" "
                  id="subject"
                  name="assunto"
                  value={subject}
                  onChange={handleSubjectChange}
                  required
                />
                <label htmlFor="subject">Assunto</label>
              </FieldInput>
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('description')}>
              <FieldInput error={getErrorMessageByFieldName('description')}>
                <textarea
                  placeholder=" "
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  required
                />
                <label htmlFor="description">Descrição</label>
              </FieldInput>
            </FormGroup>
          </main>
        </Container>
      </Overlay>
    </Portal>
  );
}
