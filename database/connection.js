var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '124563',
      database : 'cadastrouser'
    }
  });

module.exports = knex
