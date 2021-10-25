const {connection} = require('../setup/dbSetup')

connection.connect();

const getAllTableRecords = async (req, res) => {
  const {tableName} = req.params
  const sqlQuery = `SELECT * FROM ${tableName}`
  await connection.query(sqlQuery, (err, data, fields) => {
    res.json({data, fields})
  })
}

module.exports = {
  getAllTableRecords
}
