const express = require('express')
const cors = require('cors')
const {router} = require('./router/DatabaseRouter')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/dbs', router)

app.listen(3001)
