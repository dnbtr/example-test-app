const Yup = require('yup');
const { setLocale } = require('yup');

setLocale({
  mixed: {
    default: 'Não é válido',
  },
  date: {
    max: 'Data não pode ser maior que a data atual',
  },
});

/*
  Sobre as validações do Yup:
  Geralmente funções retornam o objeto schema ou false
*/

async function loginValidator(request) {
  const data = {
    email: request.body.email,
    password: request.body.password,
  };

  const schema = Yup.object().shape({
    email: Yup.string().required('email é um campo obrigatório'),
    password: Yup.string().required('password é um campo obrigatório'),
  });

  //abortEarly false para retornar todos os campos inválidos, e não apenas o primeiro
  const valido = await schema
    .validate(data, { abortEarly: false })
    .catch((e) => {
      return e;
    });
  return valido;
}

module.exports = loginValidator;
