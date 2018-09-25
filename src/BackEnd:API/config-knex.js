const knex = require('./db/knex');

knex.migrate.latest()
  .then(function() {
    process.exit(0)
  })
  .catch(function(err) {
    process.exit(0)
  });
