import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import academiioLogoWhite from '../../assets/img/ACADEMIIO_WHITE.png';
import { FiPower } from 'react-icons/fi';

import './styles.css';

function Menu() {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className='menu'>
      <img className='logo' src={academiioLogoWhite} alt='Academiio Logo' />

      <button
        className='logoutButtonWrapper'
        onClick={() => {
          alert('click')
        }}
      >
        <FiPower size={42} className='logoutButton' />
      </button>
    </div>
  );
}

export default Menu;
