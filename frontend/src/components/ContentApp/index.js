import React, { useState, useEffect } from 'react';
import { Container, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import api from '../../utils/api';

import './styles.css';

function ContentApp() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [url, setUrl] = useState('');
  const [contents, setContents] = useState([]);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  // Sempre que salvar um novo conteúdo
  const handleAddNewContent = async () => {
    const user_id = localStorage.getItem('id');

    try {
      await api.post('/content-create', {
        titulo: titulo,
        url: url,
        user_id: user_id,
      });
      setSuccess(true);
      closeModal();
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    async function getAllContentFromUser() {
      const user_id = localStorage.getItem('id');

      const response = await api.get(`/content-get/${user_id}`);

      setContents(response.data);
    }

    getAllContentFromUser();
  }, [success]); // Sempre que a flag success mudar, a lista de conteúdos será recarregada

  return (
    <Container className='contentAppWrapper'>
      <Container as='header' className='contentAppHeader'>
        <Form.Text className='contentAppHeaderTitle'>Conteúdos</Form.Text>
        <Button variant='primary' onClick={openModal}>
          Adicionar Conteúdo
        </Button>
      </Container>

      <ListGroup>
        <Container className='contentAppContentTitle'>
          <Container>Título</Container>
          <Container>Link de acesso</Container>
        </Container>

        {contents.map((value, index) => {
          return (
            <ListGroup activeKey={index} key={index}>
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
        <Modal show={show} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Adicionar conteúdo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId='formBasicText'>
              <Form.Label>Título</Form.Label>
              <Form.Control
                type='text'
                placeholder='Título'
                onChange={({ target }) => setTitulo(target.value)}
              />
            </Form.Group>

            <Form.Group controlId='formBasicUrl'>
              <Form.Label>URL</Form.Label>
              <Form.Control
                type='url'
                placeholder='URL'
                onChange={({ target }) => setUrl(target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={closeModal}>
              Cancelar
            </Button>
            <Button variant='primary' onClick={handleAddNewContent}>
              Salvar novo conteúdo
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </Container>
  );
}

export default ContentApp;
