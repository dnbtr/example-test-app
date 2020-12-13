require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env',
});

module.exports = {
  host: '127.0.0.1',
  dialect: 'sqlite',
  storage: './src/database/database.sqlite',
  // operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
