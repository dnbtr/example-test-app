import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './global.css';

import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';

const Pagina404 = () => <div>404 - Página não encontrada</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={LoginPage} exact />
      <Route path='/cadastro' component={SignInPage} exact />
      <Route path='/' component={LoginPage} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
