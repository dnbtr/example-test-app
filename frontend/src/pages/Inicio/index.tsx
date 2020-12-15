import React, { useState } from 'react';
import Login from '../../components/Login';
import SignIn from '../../components/SignIn';

import './styles.css';

export default function Inicio() {
  const [loginWidgetActive, setLoginWidgetActive] = useState(true);

  function handleWidgetChange() {
    setLoginWidgetActive(!loginWidgetActive);
  }

  if (loginWidgetActive) {
    return (
      <div className='paginaInicial'>
        <Login />
        <button onClick={handleWidgetChange} />
      </div>
    );
  } else {
    return (
      <div className='paginaInicial'>
        <SignIn />
        <button onClick={handleWidgetChange} />
      </div>
    );
  }
}