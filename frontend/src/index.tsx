import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './global.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';
import Pagina404 from './pages/Pagina404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={LoginPage} exact />
      <Route path='/cadastro' component={SignInPage} exact />
      <Route path='/home' component={Home} exact />
      <Route path='/' component={LoginPage} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
