import React, { useState } from 'react';
import academiioLogoWhite from '../../assets/img/ACADEMIIO_WHITE.png';
import { FiPower } from 'react-icons/fi';
import { Button, Container, Modal } from 'react-bootstrap';

import './styles.css';

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className='menu' as='div'>
      <img className='logo' src={academiioLogoWhite} alt='Academiio Logo' />

      <button className='logoutButtonWrapper' onClick={handleShow}>
        <FiPower color={'white'} size={42} className='logoutButton' />
      </button>

      {/* 
        Modal de logout
      */}
      <React.Fragment>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>Você deseja fazer logout?</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Sim
            </Button>
            <Button variant='primary' onClick={handleClose}>
              Não
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </Container>
  );
}

export default Menu;
