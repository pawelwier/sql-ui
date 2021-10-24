const {
  getAllDatabaseTables,
  getDatabaseTableDetails,
  addDatabaseTableColumn,
  removeDatabaseTableColumn
} = require('../controllers/DatabaseController')

const express = require('express')
const router = express.Router()

router.get('/', getAllDatabaseTables)
router.get('/:tableName/details', getDatabaseTableDetails)
router.post('/:tableName/add-column', addDatabaseTableColumn)
router.delete('/:tableName/remove-column', removeDatabaseTableColumn)

module.exports = {
  router
}
