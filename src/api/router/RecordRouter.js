const {getAllTableRecords} = require('../controllers/RecordController')

const express = require('express')
const recordRouter = express.Router()

recordRouter.get('/:tableName', getAllTableRecords)

module.exports = {
  recordRouter
}
