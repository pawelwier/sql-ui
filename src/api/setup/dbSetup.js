const path = require('path')
const {Sequelize} = require('sequelize')
const mysql = require('mysql')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })

const sequelize = new Sequelize(
  process.env.SQL_DB_NAME,
  process.env.SQL_USER,
  process.env.SQL_PASSWORD,
  {
    dialect: 'mysql',
    port: process.env.SQL_DB_PORT,
  }
)

const connection = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DB_NAME,
});

module.exports = {
  sequelize,
  connection,
}
