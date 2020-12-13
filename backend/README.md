Passo a passo:

$ mkdir backend
$ yarn init
$ yarn add express morgan sqlite3 sequelize
$ yarn add -D sequelize-cli nodemon
- Criar arquivo server.js com o servidor;
  - Não esquecer de utilizar o body-parser (já vem com o express) para aceitar requisições POST com JSON
- Criar arquivo routes para as rotas;
$ yarn sequelize init
  - Organizar as pastas criadas pelo sequelize;
  - Criar arquivo .sequelizerc (um JS) com os novos paths;
  - Editar o /config/config.json (pode ser um JS);
$ yarn sequelize migration:create --name=[NOME DA MIGRATION]
  - Editar as migrations
  - Ajustar o index.js da pasta /models