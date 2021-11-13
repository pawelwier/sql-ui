const {connection} = require('../setup/dbSetup')

connection.connect();

const getMysqlInsertQuery = (tableName, columns, values) =>
  `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES ("${values.join('", "')}");`

const getAllTableRecords = async (req, res) => {
  const {tableName} = req.params
  const sqlQuery = `SELECT * FROM ${tableName}`
  await connection.query(sqlQuery, (err, data, fields) => {
    res.json({data, fields})
  })
}

const addNewTableRecord = async (req, res) => {
  const {tableName} = req.params
  const data = req.body
  const dataKeys = []
  const dataValues = []
  for (const key of Object.keys(data)) {
    if (data[key]) {
      dataKeys.push(key)
      dataValues.push(data[key])
    }
  }
  const sqlQuery = getMysqlInsertQuery(tableName, dataKeys, dataValues)
  console.log(sqlQuery)
  await connection.query(sqlQuery, (err, data, fields) => {
    res.json({data, fields})
  })
}

module.exports = {
  getAllTableRecords,
  addNewTableRecord
}
