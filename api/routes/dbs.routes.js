'use strict'

const express = require('express')
const fs = require('fs')
const jwt = require('jsonwebtoken')

const router = express.Router()

const DBViewer = require('../services/dbs.services')
const { isAuthenticated } = require('../services/isAuthenticated')
const log = require('../services/logger')

router.get('/v1/@all', [isAuthenticated], (request, response) => {
  const dbId = request.query.q;
  const dbs = new DBViewer()
  const data = dbs.getRegisteredDatabases()
  if (dbId) {
    const dbConfig = data.filter(element => element.type === dbId)
    response.status(200).send(dbConfig)
  } else {
    response.status(200).send(data)
  }
})


/**
 * registerDB
 * Registra una nueva base de datos en la lista de base de datos
 * si existe el ID devuelve error
 */
router.post('/v1/registerDB', async (request, response) => {
  try {
    const { id, type, views } = request.body;

    const dbs = new DBViewer()
    let querystmt = dbs.getRegisteredDatabases();

    if (querystmt.some(item => item.id === id)) {
      response.status(400).send({
        message: 'The entered ID already exists in the database',
        errorCode: 'duplicatedObject'
      })
    } else {
      querystmt.push(request.body)
      fs.writeFile(`${getFolderPath()}databases/databases.json`, JSON.stringify(querystmt, undefined, 2), 'utf8', err => {
        if (err) return console.log(err);
      });
      createViewSQL(type, views)
      response.send(querystmt)
    }
  } catch (error) {
    log.error(`${error.message}`)
    response.status(400).send({ message: error.message })
  }
})



function getFolderPath() {
  if (!process.env.NODE_API_DB_SETUP) {
    return './.apiserver/'
  }
  return './api/'
}

function writerJS(views, path) {
  views.forEach((v) => {
    var file = fs.createWriteStream(`${path}${v.name.replace('.sql', '')}.sql`);
    file.on('error', function (err) { console.log(err) /* error handling */ });
    file.write(v.query);
    file.end();
  });
}

function createViewSQL(type, views) {
  switch (type) {
    case 'MYSQL':
      const pathMysql = `${getFolderPath()}./databases/views/mysql/`;
      writerJS(views, pathMysql);
      break;

    case 'MARIADB':
      const pathMariaDB = `${getFolderPath()}./databases/views/mariadb/`;
      writerJS(views, pathMariaDB);
      break;

    case 'DB2':
      const pathDB2 = `${getFolderPath()}./databases/views/db2/`;
      writerJS(views, pathDB2);
      break;

    default:
      break;
  }
}

router.get('/v1/getById/:id', (request, response) => {
  const id = request.params.id;
  const dbs = new DBViewer();
  let databasesList = dbs.getRegisteredDatabases();
  let result = databasesList.filter(item => item.id === parseInt(id))
  response.send(result)
})

router.post('/v1/loginidentity', (request, response) => {
  const user = process.env.USER_TEMP_API || 'admin'
  const pass = process.env.PASS_TEMP_API || 'Avatar123'
  const secret = process.env.SECRET_PASS_API || 'SAKLSJADsajkdh231jkdsfkjsd##asjdkhkhsjHSKJADHKJSAajsadkas'
  const { logonId, logonPassword } = request.body

  if (user === logonId && pass === logonPassword) {
    var token = jwt.sign({ logonId: logonId }, secret);
    response.status(200).send({ token: token })
  } else {
    response.status(401).send({ message: 'No tiene Autorizacion' })
  }
})


module.exports = router