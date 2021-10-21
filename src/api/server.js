const {getAllUsers} = require('./controllers/UserController')
const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', getAllUsers)
app.listen(3001)
