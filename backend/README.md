Documentação do TypeORM diz que é necessário dar import "reflect-metadata" (no app.ts por exemplo).


#### Notas
- $ yarn add express pg reflect-metadata sqlite3 typeorm
- $ yarn add -D @types/express @types/node typescript ts-node-dev
- `app.ts` foi mudado para `app.js` - Falta descobrir como invocar a tipagem do próprio express na classe AppController
- Não esquecer o `dotenv` para os arquivos com variáveis de ambiente

#### TODO
- Arquivos a mudar para Typescript
  - models
  - app.js
- Criar um dockerfile para deploy do banco Postgres