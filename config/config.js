module.exports = {
  development: {
    username: "root",
    password: "Itsbrus16!",
    database: "preparize_db",
    port: 3306,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
