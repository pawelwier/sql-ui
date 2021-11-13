const {
  getAllTableRecords,
  addNewTableRecord,
} = require('../controllers/RecordController')

const express = require('express')
const recordRouter = express.Router()

recordRouter.get('/:tableName', getAllTableRecords)
recordRouter.post('/:tableName', addNewTableRecord)

module.exports = {
  recordRouter
}
