### example-test-app

:computer: Aplicação CRUD simples para cadastro de conteúdos em ReactJS/NodeJS/ExpressJS.

Pacotes utilizados
Front-end
- Boilerplate - create-react-app com template Typescript;
- React-Bootstrap;
- Typescript (apenas no front-end por hora)

Backend
- ExpressJS;
- SequelizeORM
- SQLite

---

#### Instruções
- Executar `$ yarn install` nas pastas `backend` e `frontend` para instalar as dependências;
- Executar `$ yarn migrate` na pasta `backend` para criar banco e tabelas SQLite (`$ yarn undo-migrate` desfaz as migrations);

Para rodar:
- Executar `$ yarn start` na pasta /backend (usando [concurrently](https://www.npmjs.com/package/concurrently) o frontend tb é inicializado)

Ou:
- `$ yarn dev` na pasta /backend para iniciar o backend no localhost:8080;
- `$ yarn start` na pasta /backend para iniciar o frontend no localhost:3000;

---

##### Como usar
:thumbsup: O backend está basicamente 100% funcional:
  - O que falta é refatoração e reorganização da arquitetura do código;
  - Faltam algumas checagens e validações com o Yup para manter a consistência (mas não há erros não-tratados);

:warning: O front end ainda não está 100%:
  - Ao logar, o redirecionamento não é feito da forma correta (a URL muda mas os componentes só carregam após um refresh);
  - Ao criar um usuário, não é feito redirecionamento automático para a página de login, e nem há aviso de erro (apenas no console);
  - Ao criar conteúdos, não há aviso de erro (apenas no console);
  - Ao fazer logout, o redirecionamento não está funcionando (apenas a checagem se está ou não logado. Ao fazer logout, a área logada deixa de ser renderizada pois a sessão é deletada do localStorage);

---

#### Documentação concisa das APIs
- Sempre testar no **localhost:8080**

- /user-create (POST)
  - Formato do request (JSON) - `{"name": [STRING], "email": [STRING], "password" [INTEGER] }`
- /user-login (POST)
  - Formato do request (JSON) - `{"email": [STRING], "password": [STRING] }`
- /content-create (POST)
  - Formato do request (JSON) - `{"titulo": [STRING], "url": [STRING], "user_id" [INTEGER] }`
- /content-get (GET)
  - Formato do request - `/content-get/:id - (Id do usuário é um INTEGER)`

---

#### TODO :warning:
**frontend**
- [X] Página Login (Página principal);
  - [ ] Redirecionamento e persistencia da sessão;
- [X] Página cadastro;
- [X] Página para adicionar conteúdos;
- [X] Página 404;

Futuramente:
- [ ] Componentes de edição e exclusão de conteúdos;
- [ ] Refatorar tudo para Typescript (~70% do código não está no padrão do TS);
- [ ] Testes unitários e de integração;

**backend**
- [X] API Login;
- [X] API Listagem conteúdos;
- [X] API Cadastro conteúdos;
- [X] Implementar o middlewares de autenticação e validação;

Futuramente:
- [ ] **Terminar de implementar MVC;**
- [ ] Melhorar tratamento de erros e retorno as mensagens (será feito com o MVC);
- [ ] Checagem de token de usuário nas APIs;
- [ ] API edição conteúdos;
- [ ] API exclusão conteúdos;
- [ ] Refatorar tudo para Typescript;
- [ ] Testes unitários e de integração;

---

#### Pontos a melhorar
- Não é feita no Sequelize nenhuma checagem se as URLs cadastradas são únicas;
- O endpoint /content-get está totalmente público e não restringe a consulta por usuário;
- Melhorar a separação do código terminando de implementar MVC.
- Melhorar o código relacionado aos erros do Sequelize (trazer de volta os erros para o front?);
- Refatorar componentes do frontend e criar mais componentes e checagens para melhor usabilidade;
- Ainda há alguma redundância de código em alguns lugares;

---

#### Notas

- O arquivo .env foi incluido na pasta backend para facilitar o deploy.
Por questão de segurança é algo que não deve ser feito em uma aplicação que será usada em produção.

**frontend**
- Foi utilizado o React-Bootstrap para quase todo o projeto, mas em algumas partes faltou fazer o override da estilização padrão;
- O ícone FiPower só vem na cor preta, e não foi possível alterar mesmo usando o [IconContext](https://github.com/react-icons/react-icons#configuration);