const express = require('express')
const cors = require('cors')
const {databaseRouter} = require('./router/DatabaseRouter')
const {recordRouter} = require('./router/RecordRouter')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/dbs', databaseRouter)

app.use('/api/v1/data', recordRouter)

app.listen(3001)
