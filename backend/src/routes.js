
/* 
  TOdo - Tratar erros de validação do Sequelize
*/

const { User } = require('./models');
const { Content } = require('./models');
const loginValidator = require('./middleware/loginValidator');

const routes = require('express').Router();
// Chamar o middleware de autenticação em todas as rotas

/* 
  Rota para login de usuário
*/

routes.post('/user-login', async (req, res) => {

  console.debug('request: ', req.body);
  const request = await loginValidator(req);

  if (request.errors) {
    return res.status(400).json({
      statusCode: 400,
      message: request.errors,
    });
  }

  // Se passou na validação acima, nenhuma outra checagem é necessária
  const { email, password } = request;

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

/* 
  Rota para criação de usuario
*/

routes.post('/user-create', async (req, res) => {
  const { name, email, password } = req.body;

  console.debug('request: ', req.body);

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
    return res.status(500).json({ statusCode: 500, message: e });
  }
});

/* 
  Rota para criação de conteúdo
*/

routes.post('/content-create', async (req, res) => {

  const { user_id, titulo, url } = req.body;

  console.debug('content-create req =', req.body);

  try {
    const saveContent = await Content.create({
      titulo: titulo,
      url: url,
      user_id: user_id,
    });

    console.debug('saveContent', saveContent);

    if (saveContent != '') {
      return res.status(200).json({
        message: 'Conteúdo criado com sucesso!',
      });
    }
  } catch (e) {
    return res.status(500).json({ statusCode: 500, message: e });
  }
});

/* 
  Rota para trazer todos os conteúdos de um usuário
*/

routes.get('/content-get/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const content = await Content.findAll({
      attributes: { exclude: ['user_id', 'createdAt', 'updatedAt'] },
      where: { user_id: id },
    });
    return res.status(200).json(content);
  } catch (e) {
    return res.status(500).json({ statusCode: 500, message: e });
  }
});

module.exports = routes;
