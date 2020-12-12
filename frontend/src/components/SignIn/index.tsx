import React from 'react';
import { Button, Container, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import academiioBlueLogo from '../../assets/img/ACADEMIIO_BLUE.png';
import { FiArrowLeft } from 'react-icons/fi';

function SignIn() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('submit');
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

          <Link className='signInWidgetBackButton' to='/login'>
            <FiArrowLeft /> Voltar ao login
          </Link>
        </Container>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control type='name' placeholder='Nome completo' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>E-mail</Form.Label>
          <Form.Control type='email' placeholder='exemplo@exemplo.com' />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Senha</Form.Label>
          <Form.Control type='password' placeholder='Insira sua senha' />
        </Form.Group>

        <Button variant='primary' type='submit' block={true}>
          CADASTRAR
        </Button>
      </Form>
    </Container>

    /* 
    <div className='loginWidgetWrapper'>
      <form className='loginWidgetForm'>
        <header>
          <h1>ACADEMIIO</h1>
          <p>Faça login para continuar</p>
        </header>

        <div>
          Email <input type='text'></input>
          Senha <input type='password'></input>
        </div>
        <div>
          <input type='checkbox'></input> Me manter logado
          <button>ENTRAR</button>
          Ainda não tem uma conta? <a>Cadastre-se</a>
        </div>
      </form>
    </div>
     */
  );
}

export default SignIn;
