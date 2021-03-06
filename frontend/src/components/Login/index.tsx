import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Image } from 'react-bootstrap';

import { Context } from '../../Context/authContext';

import academiioBlueLogo from '../../assets/img/ACADEMIIO_BLUE.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  const { authenticated, handleLogin } = useContext(Context);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('token');
    if (loggedInUser) {
      // const foundUser = JSON.parse(loggedInUser);
      // setUser(foundUser);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password
    }

    handleLogin(payload);
  }

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
