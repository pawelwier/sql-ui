const {
  getAllDatabaseTables,
  getDatabaseTableDetails,
  addDatabaseTableColumn,
  removeDatabaseTableColumn
} = require('../controllers/DatabaseController')

const express = require('express')
const databaseRouter = express.Router()

databaseRouter.get('/', getAllDatabaseTables)
databaseRouter.get('/:tableName/details', getDatabaseTableDetails)
databaseRouter.post('/:tableName/add-column', addDatabaseTableColumn)
databaseRouter.delete('/:tableName/remove-column', removeDatabaseTableColumn)

module.exports = {
  databaseRouter
}
