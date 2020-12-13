// Esta função serve para deletar todas as bases SQLite mesmo que o teste tenha falhado e o script "posttest" não rode
// Talvez haja alguma solução mais simples

const { sequelize } = require('../../src/app/models');

//Promise.all para aguardar a resolução da promise que fará o truncate
module.exports = () => {
  return Promose.all(
    Object.keys(sequelize.models).map((key) => {
      return sequelize.models[key].destroy({
        truncate: true,
        force: true,
      });
    })
  );
};
