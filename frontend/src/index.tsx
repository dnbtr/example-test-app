import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { AuthProvider } from './Context/authContext';

import Routes from './routes';
import history from './history';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
