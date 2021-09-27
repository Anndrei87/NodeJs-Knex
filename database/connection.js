var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '87790840',
      database : 'cadastrouser'
    }
  });

module.exports = knex