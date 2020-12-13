const { User } = require('./models');

const routes = require('express').Router();
// Chamar o middleware de autenticação em todas as rotas

routes.get('/', (req, res) => {
  console.log('helloworld');
});

routes.post('/user-login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  // Se usuário não for encontrado
  if (!user) {
    return res.status(401).json({ message: 'Usuário não encontrado!' });
  }

  // Se a senha estiver incorreta
  if (!(await user.checkPassword(password))) {
    return res.status(401).json({ message: 'Senha incorreta!' });
  }

  // Se senha e mail estiverem corretos
  return res.status(200).json({
    id: user.id,
    email: user.email,
    token: user.generateToken(),
  });
});

routes.post('/user-create', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const saveUser = await User.create({
      name: name,
      email: email,
      password: password,
    });

    if (saveUser != '') {
      return res.status(200).json({
        message: 'Usuário criado com sucesso!',
      });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

module.exports = routes;
