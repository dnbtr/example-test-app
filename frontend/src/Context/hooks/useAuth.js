import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../utils/api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  /*
    Sempre que esse componente for carregado, ele busca o token no localstorage
  */
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(payload) {

    try {
      let response = await api.post('/user-login', payload);

      if (response.status === 200) {

        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('id', response.data.id);

        // Seta o token recebido como o default para todas as requisições
        api.defaults.headers.Authorization = `Bearer ${response.token}`;

        // Seta a flag como true e redireciona para a home
        setAuthenticated(true);
        history.push('/area_logada');
        return <Redirect to='/area_logada' />

      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(`Error handleLogin - ${error.message}`);

      // Setar uma variável para mostrar o erro no componente de login
    }
  }

  function handleLogout() {
    console.log('handleLogout event');
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
    return <Redirect to='/' />
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
