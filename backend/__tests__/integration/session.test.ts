const request = require('supertest');
const appTest = require('../../src/app');

const { User } = require('../../src/app/models');
const { truncate } = require('../utils/truncate');

describe('Autenticação', () => {

  // Antes de cada teste, deleta tudo de todas as bases existentes
  beforeEach(async () => {
    await truncate();
  });

  it('deve autenticar com credenciais válidas', async () => {
    const user = await User.create({
      name: 'jestTeste',
      email: 'jest@test.com',
      password_hash: '1234',
    });

    const response = await request(appTest).post('/sessions').send({
      email: user.email,
      password: '123123',
    });

    expect(response.status).toBe(200);
  });

  // it('deve criar um usuário na base', async () => {
  //   const user = await User.create({
  //     name: 'jestTeste',
  //     email: 'jest@test.com',
  //     password_hash: '1234',
  //   });

  //   console.log(user);

  //   expect(user.email).toBe('jest@test.com');
  // });
});

// describe('Autenticação', () => {
//   it('deve receber token JWT quando autenticado com credenciais válidas', () => {});
// });
