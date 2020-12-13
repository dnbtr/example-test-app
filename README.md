### example-test-app

Aplicação CRUD simples para cadastro de conteúdos em ReactJS/NodeJS/ExpressJS.

Pacotes utilizados
- Boilerplate - create-react-app com template Typescript;
- ExpressJS;
- SequelizeORM
- PostgreSQL
- SQLite (para testes)
- Jest (testes de integração)

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

- O ícone FiPower só vem na cor preta, e não foi possível alterar mesmo usando o [IconContext](https://github.com/react-icons/react-icons#configuration)

Documentação do TypeORM diz que é necessário dar import "reflect-metadata" (no app.ts por exemplo).