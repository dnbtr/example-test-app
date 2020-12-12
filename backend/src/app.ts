const Express = require('express');

/* 
  Arquivo está estruturado em classe para facilitar os testes
  Já que ao testar, não será criado um servidor
*/

class AppController extends Express {
  constructor() {
    super();
    this.express = Express();

    this.middlewares();
    this.routes();

  }

  middlewares() {
    this.express.use(Express.json());
  }

  routes() {
    this.express.use(require('./routes'));
  }
}

module.exports = new AppController().express