'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')

const app = express()

const dbsRoutes = require('./routes/dbs.routes')
const PORT = process.env.NODE_API_DB_PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('short'))

app.use('/dbs', dbsRoutes)

app.listen(PORT, () =>{
  console.log(`db api server is running in http://localhost:${PORT}`)
})
