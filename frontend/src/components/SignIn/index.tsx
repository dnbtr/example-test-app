import React, { useState } from 'react';
import { Button, Container, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import academiioBlueLogo from '../../assets/img/ACADEMIIO_BLUE.png';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../utils/api';

function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const request = await api.post('/user-create', {
        name: name,
        email: email,
        password: password,
      });
      // const statusCode = request.request.status;
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Container className='signInWidgetWrapper'>
      <Form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Container className='signInWidgetHeader'>
          <Container>
            <Image width='30%' src={academiioBlueLogo} fluid />
            <Form.Text>Faça o seu Cadastro</Form.Text>
          </Container>

          <Link className='signInWidgetBackButton' to='/'>
            <FiArrowLeft /> Voltar ao login
          </Link>
        </Container>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control
            type='name'
            placeholder='Nome completo'
            onChange={({ target }) => setName(target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type='email'
            placeholder='exemplo@exemplo.com'
            onChange={({ target }) => setEmail(target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type='password'
            placeholder='Insira sua senha'
            onChange={({ target }) => setPassword(target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' block={true}>
          CADASTRAR
        </Button>
      </Form>
    </Container>
  );
}

export default SignIn;
