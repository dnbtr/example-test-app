### example-test-app

Aplicação CRUD simples para cadastro de conteúdos em ReactJS/NodeJS/ExpressJS.

Pacotes utilizados
- Boilerplate - create-react-app com template Typescript;
- ExpressJS;
- SequelizeORM
- SQLite
- Typescript (apenas no front-end por hora)

#### TODO :warning:
**frontend**
- [X] Página Login (Página principal);
- [X] Página cadastro;
- [X] Página para adicionar conteúdos;
- [ ] (opcional) recursos de deletar e editar conteúdos;
- [X] Página 404;
- [ ] Terminar a estilização e fazer ajustes finais
- [ ] Refatorar tudo para Typescript

**backend**
- [ ] API Login;
- [ ] API Listagem conteúdos;
- [ ] API Cadastro conteúdos;
- [ ] (opcional) API edição conteúdos;
- [ ] (opcional) API exclusão conteúdos;
- [ ] Refatorar tudo para Typescript
- [ ] Dockerfile para PostgreSQL

#### Notas

- Diferenças em relação ao layout fornecido
  - O ícone FiPower só vem na cor preta, e não foi possível alterar mesmo usando o [IconContext](https://github.com/react-icons/react-icons#configuration)
- Inicialmente seria usado o TypeORM, por ser melhor integrado com o Typescript. Uma pesquisa rápida mostra que o Sequelize é um ORM mais estável (atualizações constantes e menos issues no github).
- Testes não foram feitos por falta de tempo
- Inicialmente, a idéia era usar Docker + PostgreSQL para o banco, mas foi usado o SQLite para agilizar a implementação