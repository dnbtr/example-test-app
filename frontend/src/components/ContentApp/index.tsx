import React, { useState } from 'react';
import { Container, Button, Form, ListGroup, Modal } from 'react-bootstrap';

import './styles.css';

import db from './data.json';

function ContentApp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className='contentAppWrapper'>
      <Container as='header' className='contentAppHeader'>
        <Form.Text className='contentAppHeaderTitle'>Conteúdos</Form.Text>
        <Button variant='primary' onClick={handleShow}>
          Adicionar Conteúdo
        </Button>
      </Container>

      <ListGroup>
        <Container className='contentAppContentTitle'>
          <Container>Título</Container>
          <Container>Link de acesso</Container>
        </Container>

        {db.map((value, index) => {
          return (
            <ListGroup activeKey={index}>
              <ListGroup.Item className='contentAppContentEntry'>
                <Container>{value.titulo}</Container>
                <Container>{value.url}</Container>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </ListGroup>

      {/* 
        Modal de adicionar conteúdo
      */}
      <React.Fragment>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adicionar conteúdo</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant='primary' onClick={handleClose}>
              Salvar novo conteúdo
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
      
    </Container>
  );
}

export default ContentApp;
