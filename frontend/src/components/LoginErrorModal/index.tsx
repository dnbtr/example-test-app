import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function LoginErrorModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
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
  );
}

export default LoginErrorModal;
