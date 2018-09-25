module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'anatel.c6cariqmwc7g.sa-east-1.rds.amazonaws.com',
      port: 3306,
      user: 'consulta',
      password: 'Consultamack1',
      database: 'Anatel'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};
