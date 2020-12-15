import { useState, useEffect } from 'react';
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

  async function handleLogin({ user }) {

    // const { data: { token },} = await api.post('/user-login');
    const token = 'asdasd';

      const data = user;
      console.debug('handleLogin', data);

    try {
      const response = await api.post(
        '/user-login',
        data
      );

      console.debug('response', response);

      if (response.status === 200) {
        console.log(response.status);
        // localStorage.setItem('token', response.data.token);
        // localStorage.setItem('email', response.data.email);
        // return <Redirect push to='/home' />;
      } else {
        // Colocar modal
        alert(response.status);
      }
    } catch (error) {
      console.log(`Error handleLogin - ${error.message}`);
    }

    localStorage.setItem('token', JSON.stringify(token));

    // Por default sempre irá mandar o token no header das requisições
    api.defaults.headers.Authorization = `Bearer ${token}`;

    // Redireciona para a página users
    setAuthenticated(true);
    // console.log(`authenticated value = ${authenticated}`); // Pq vem como false? O setAuthenticated só é setado quando o DOM é atualizado?
    history.push('/home');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
