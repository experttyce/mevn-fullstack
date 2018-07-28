module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'data',
    user: process.env.DB_USER || 'userdev',
    password: process.env.DB_PASSWORD || 'userdev',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './data.sqlite'
    }
  }
}
