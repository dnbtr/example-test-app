module.exports = {
  host: '127.0.0.1',
  dialect: 'sqlite',
  storage: './src/database/database.sqlite',
  // operatorsAliases: false,
  // logging: (output) => { console.log(output) };
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
