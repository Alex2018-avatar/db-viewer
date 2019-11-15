'use strict'

const express = require('express')
const router = express.Router()

const DBViewer = require('../services/dbs.services')

router.get('/v1/getAll', (request, response) => {
  response.status(200).send('hola cmom estan')
})

router.get('/v1/getAllDBs', (request, response) => {
  let dbs = new DBViewer()
  const data = JSON.stringify(dbs.getRegisteredDatabases(), undefined, 1);
  response.send(data.concat('\n'));
})

router.get('/v1/getById/:id', (request, response) => {
  const dbs = new DBViewer()
  const data = dbs.getRegisteredDatabases()
  const dbConfig = data.filter(element => element.id === request.params.id)
  response.status(200).send(dbConfig)
})
/**
 * registerDB
 * Registra una nueva base de datos en la lista de base de datos
 * si existe el ID devuelve error
 */
router.post('/v1/registerDB', (request, response) => {

})

/**
 * Add View
 * Agrega una vista a una bd registrada y su sentencia sql correspondiente
 * para que esta luego pueda ser invocada.
 */
router.post('/addView', (request, response) => {

})

module.exports = router