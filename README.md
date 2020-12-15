### example-test-app

Aplicação CRUD simples para cadastro de conteúdos em ReactJS/NodeJS/ExpressJS.

Pacotes utilizados
Front-end
- Boilerplate - create-react-app com template Typescript;
- React-Bootstrap;
- Typescript (apenas no front-end por hora)

Backend
- ExpressJS;
- SequelizeORM
- SQLite

#### Instruções
- Executar `$ yarn install` nas pastas `backend` e `frontend` para instalar as dependências;
- Executar `$ yarn migrate` na pasta `backend` para criar banco e tabelas SQLite (`$ yarn undo-migrate` desfaz as migrations);

Para rodar:
- Executar `$ yarn start` na pasta /backend (usando [concurrently](https://www.npmjs.com/package/concurrently) o frontend tb é inicializado)

Ou:
- `$ yarn dev` na pasta /backend para iniciar o backend no localhost:8080;
- `$ yarn start` na pasta /backend para iniciar o frontend no localhost:3000;

#### Documentação concisa das APIs
- Sempre testar no **localhost:8080**

- /user-create (POST)
  - Request JSON - `{"name": [STRING], "email": [STRING], "password" [INTEGER] }`
  - Response JSON - 
- /user-login (POST)
  - Request JSON - `{"email": [STRING], "password": [STRING] }`
- /content-create (POST)
  - Request JSON - `{"titulo": [STRING], "url": [STRING], "user_id" [INTEGER] }`
- /content-get (GET)
  - Request - `/content-get/:id - (Id do usuário é um INTEGER)`


#### TODO :warning:
**frontend**
- [X] Página Login (Página principal);
  - [ ] Redirecionamento e persistencia da sessão;
- [X] Página cadastro;
- [X] Página para adicionar conteúdos;
- [X] Página 404;

Futuramente:
- [ ] Componentes de edição e exclusão de conteúdos;
- [ ] Refatorar tudo para Typescript;
- [ ] Testes unitários e de integração;

**backend**
- [X] API Login;
- [X] API Listagem conteúdos;
- [X] API Cadastro conteúdos;
- [X] Implementar o middlewares de autenticação e validação;

Futuramente:
- [ ] Checagem de token de usuário nas APIs;
- [ ] (opcional) API edição conteúdos;
- [ ] (opcional) API exclusão conteúdos;
- [ ] Refatorar tudo para Typescript;
- [ ] **Terminar de implementar MVC;**
- ~[ ] Dockerfile para PostgreSQL;~
- [ ] Testes unitários e de integração;


#### Pontos a melhorar
- Não é feita no Sequelize nenhuma checagem se as URLs cadastradas são únicas;
- O endpoint /content-get está totalmente público e não restringe a consulta por usuário;
- Melhorar a separação do código terminando de implementar MVC
- Ainda há alguma redundância de código em alguns lugares

#### Notas

**frontend**
- Foi utilizado o React-Bootstrap para quase todo o projeto, mas em algumas partes faltou fazer o override da estilização padrão;
- O ícone FiPower só vem na cor preta, e não foi possível alterar mesmo usando o [IconContext](https://github.com/react-icons/react-icons#configuration);