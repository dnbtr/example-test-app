import React from 'react';
import { Button, Container, Form, Image } from 'react-bootstrap';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import academiioBlueLogo from '../../assets/img/ACADEMIIO_BLUE.png';

import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('submit');
  };
  return (
    <Container className='loginWidgetWrapper'>
      <Form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Image width='30%' src={academiioBlueLogo} fluid />
        <Form.Text>Faça login para continuar</Form.Text>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>E-mail</Form.Label>
          <Form.Control type='email' placeholder='exemplo@exemplo.com' />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Senha</Form.Label>
          <Form.Control type='password' placeholder='Insira sua senha' />
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Manter conectado' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          ENTRAR
        </Button>
        <Form.Text>
          Ainda não tem conta? <Link to='/cadastro'>Cadastre-se</Link>
        </Form.Text>
      </Form>
    </Container>
  );
}

export default Login;
