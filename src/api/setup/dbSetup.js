const path = require('path')
const {Sequelize} = require('sequelize')
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

module.exports = sequelize
