const sequelize = require('../setup/dbSetup')

const getAllDatabaseTables = async (req, res) => {
  const tables = await sequelize.getQueryInterface().showAllSchemas()
  res.json(tables.map(t => t.Tables_in_node))
}

module.exports = {
  getAllDatabaseTables
}
