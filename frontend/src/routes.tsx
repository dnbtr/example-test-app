// import React, { useContext } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import Home from './pages/Home';
// import { Context } from './Context/authContext';

// function CustomRoute({ isPrivate, ...rest }) {
//   const { loading, authenticated } = useContext(Context);

//   if (loading) {
//     return <p>Carregando...</p>;
//   }

//   if (isPrivate && !authenticated) {
//     return <Redirect to='/inicial' />;
//   }

//   return <Route {...rest} />;
// }

// export default function Routes() {
//   return (
//     <Switch>
//       <CustomRoute exact path='/' component={PaginaInicial}/>
//       <CustomRoute exact isPrivate path='/area_logada' component={Home}/>
//     </Switch>
//   )
// }

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './global.css';

import Home from './pages/Home';
import Pagina404 from './pages/Pagina404';
import Inicio from './pages/Inicio';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} exact />
        <Route path='/' component={Inicio} exact />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
}
