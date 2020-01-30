'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const favicon = require('serve-favicon');
const cors = require('cors')
const passport = require('./services/passport')
require('dotenv').config()

const app = express()
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

const log = require('./services/logger')
const dbsRoutes = require('./routes/dbs.routes')
const PORT = process.env.NODE_API_DB_PORT || 3000

app.use(helmet())
// compress all responses
app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('combined', {
  stream: {
    write: message => log.info(message.trim())
  }
}))
app.use(cors())

app.use('/', express.static(path.join(__dirname, 'public')))


// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(path.join(__dirname, 'public'), 'index.html'));
});

app.use('/dbs', dbsRoutes)

app.listen(PORT, () =>{
  log.info('--------------------------------------------------------------------')
  log.info(`[ REST-SERVER ] is running in http://localhost:${PORT}`)
  log.info('--------------------------------------------------------------------')
})
