const {getAllUsers, addUser} = require('./controllers/UserController')
const {getAllDatabaseTables} = require('./controllers/DatabaseController')
const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/v1/users', getAllUsers)
app.post('/api/v1/user', addUser)

app.get('/api/v1/dbs', getAllDatabaseTables)

app.listen(3001)
