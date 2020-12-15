import React, { useState, useContext } from 'react';
import { Context } from '../../Context/authContext';
import { Button, Container, Modal } from 'react-bootstrap';
import { FiPower } from 'react-icons/fi';

import academiioLogoWhite from '../../assets/img/ACADEMIIO_WHITE.png';

import './styles.css';

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { handleLogout } = useContext(Context);


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
            <Button variant='secondary' onClick={handleLogout}>
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
