module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'timeworkdev',
    user: process.env.DB_USER || 'dev',
    password: process.env.DB_PASSWORD || 'dev',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './timeworkdev.sqlite',
      operatorsAliases: false
    }
  }
};
