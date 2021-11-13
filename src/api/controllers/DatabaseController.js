const {sequelize} = require('../setup/dbSetup')

const getAllDatabaseTables = async (req, res) => {
  const tables = await sequelize.getQueryInterface().showAllSchemas()
  res.json(tables.map(t => t.Tables_in_node))
}

const getDatabaseTableDetails = async (req, res) => {
  const {tableName} = req.params
  const details = await sequelize.getQueryInterface().describeTable(tableName)
  res.json(details)
}

const addDatabaseTableColumn = async (req, res) => {
  const {tableName} = req.params
  const {name, type, after} = req.body
  const column = await sequelize.getQueryInterface().addColumn(tableName, name, {type, after})
  res.json(column)
}

const removeDatabaseTableColumn = async (req) => {
  const {tableName} = req.params
  const {name} = req.body
  await sequelize.getQueryInterface().removeColumn(tableName, name)
}

module.exports = {
  getAllDatabaseTables,
  getDatabaseTableDetails,
  addDatabaseTableColumn,
  removeDatabaseTableColumn,
}
