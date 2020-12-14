### example-test-app

Aplicação CRUD simples para cadastro de conteúdos em ReactJS/NodeJS/ExpressJS.

Pacotes utilizados
- Boilerplate - create-react-app com template Typescript;
- React-Bootstrap;
- ExpressJS;
- SequelizeORM
- SQLite
- Typescript (apenas no front-end por hora)

#### TODO :warning:
**frontend**
- [X] Página Login (Página principal);
  - [ ] Redirecionamento e persistencia da sessão;
- [X] Página cadastro;
- [X] Página para adicionar conteúdos;
- [ ] Componentes de edição e exclusão de conteúdos;
- [X] Página 404;
- [ ] Terminar a estilização e fazer ajustes finais;
- [ ] Refatorar tudo para Typescript;
- [ ] Testes unitários e de integração;

**backend**
- [X] API Login;
- [X] API Listagem conteúdos;
  - [ ] Checagem de token de usuário na API;
- [X] API Cadastro conteúdos;
  - [ ] Checagem de token de usuário na API;
- [ ] Implementar o middleware de autenticação (auth);
- [ ] Usar a Context API para terminar o frontend;
- [ ] (opcional) API edição conteúdos;
- [ ] (opcional) API exclusão conteúdos;
- [ ] Refatorar tudo para Typescript;
- [ ] **Terminar de implementar MVC;**
- ~[ ] Dockerfile para PostgreSQL;~
- [ ] Testes unitários e de integração;


#### Instruções
- Executar `$ yarn install` nas pastas `backend` e `frontend` para instalar as dependências de dev e prod;
- Executar `$ yarn migrate` na pasta `backend` para criar banco e tabelas SQLite (`$ yarn undo-migrate` desfaz as migrations);
- Integração de back e front end ainda não está concluída, mas o backend está funcional:
- `$ yarn dev` para iniciar o backend no localhost:8080;

Para o frontend:
- Executar `$ yarn start` para iniciar no localhost:3000;

#### Notas

**frontend**
- Foi utilizado o React-Bootstrap para quase todo o projeto, mas em algumas partes faltou fazer o override da estilização padrão;
- O ícone FiPower só vem na cor preta, e não foi possível alterar mesmo usando o [IconContext](https://github.com/react-icons/react-icons#configuration);

**backend**
- Inicialmente seria usado o TypeORM, por ser melhor integrado com o Typescript. Uma pesquisa rápida mostra que o Sequelize é um ORM mais estável (atualizações constantes e menos issues no github).
- Inicialmente, a idéia era usar Docker + PostgreSQL para o banco, mas foi usado o SQLite para agilizar a implementação
- Ainda falta implementar arquitetura MVC, atualmente o código ainda está um pouco confuso.