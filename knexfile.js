// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      //filename: './dev.sqlite3'
      filename: "./data/car-dealer.db3",
    },
    useNullAsDefault: true, // ONLY needed for SQLite

    migrations: {
        directory: "./migrations",
    },
    seeds: {
        directory: "./seeds",
    },//will seeds run all the JS files in this dir?
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
