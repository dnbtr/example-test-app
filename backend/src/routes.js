const { User } = require('./models');
const { Content } = require('./models');

const routes = require('express').Router();
// Chamar o middleware de autenticação em todas as rotas

routes.post('/user-login', async (req, res) => {
  const { email, password } = req.body;

  // Verifica se o usuário existe na base
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res
      .status(401)
      .json({ message: 'Usuário não encontrado ou senha incorreta!' });
  }

  // Se usuário existir, verificar a senha
  const checkPassword = await user.checkPassword(password);
  if (!checkPassword) {
    return res
      .status(401)
      .json({ message: 'Usuário não encontrado ou senha incorreta!' });
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
        user: {
          name: name,
          email: email,
        },
      });
    } else {
      return res.status(500).json({
        message: 'Houve algum erro no servidor',
      });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

routes.post('/content-create', async (req, res) => {
  const { user_id, titulo, url } = req.body;

  try {
    const saveContent = await Content.create({
      titulo: titulo,
      url: url,
      user_id: user_id,
    });

    if (saveContent != '') {
      return res.status(200).json({
        message: 'Conteúdo criado com sucesso!',
      });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

routes.get('/content-get/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const content = await Content.findAll({
      attributes: { exclude: ['user_id', 'createdAt', 'updatedAt'] },
      where: { user_id: id },
    });

    return res.status(200).json(content);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

module.exports = routes;
