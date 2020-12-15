
import React, { useContext } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Context } from './Context/authContext';

import Home from './pages/Home';
import Pagina404 from './pages/Pagina404';
import Inicio from './pages/Inicio';

import './global.css';
import Cadastro from './pages/Cadastro';

// Pesquisar as tipagens corretas para que esse arquivo seja um .tsx
// function CustomRoute({ isPrivate }: { isPrivate: ReactNode}, {...rest}): React.FunctionComponent {

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h3>Carregando...</h3>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to='/area_logada' />;
  }

  return <Route {...rest} />;
  // return <CustomRoute path='/' component={Inicio} />
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute isPrivate exact path='/area_logada' component={Home} />
        <CustomRoute exact path='/cadastro' component={Cadastro} />
        <CustomRoute path='/' component={Inicio} />
        <CustomRoute component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
}

// import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './global.css';

// import Home from './pages/Home';
// import Pagina404 from './pages/Pagina404';
// import Inicio from './pages/Inicio';

// export default function Routes() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path='/home' component={Home} exact />
//         <Route path='/' component={Inicio} exact />
//         <Route component={Pagina404} />
//       </Switch>
//     </BrowserRouter>
//   );
// }
