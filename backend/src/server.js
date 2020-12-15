/*
  Não há um .env.test
  Mas este código ficará inalterado por enquanto.
*/

require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env',
});

const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes.js');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

/* 
  Usando o morgan para logar todas as requisições
  Futuramente refatorar para utilizar o 'debug' ou outro debugger
*/

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* 
  Todas as rotas devem ser configuradas no arquivo routes.js
*/
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
