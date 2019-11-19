'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

const app = express()

const dbsRoutes = require('./routes/dbs.routes')
const PORT = process.env.NODE_API_DB_PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('short'))
app.use(cors())

//app.use('/static', express.static(path.join(__dirname, 'public')))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(path.join(__dirname, 'public'), 'index.html'));
});

app.use('/dbs', dbsRoutes)

app.listen(PORT, () =>{
  console.log(`db api server is running in http://localhost:${PORT}`)
})
