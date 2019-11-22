'use strict'

const express = require('express')
const fs = require('fs')
const jwt =require('jsonwebtoken')

const router = express.Router()

const DBViewer = require('../services/dbs.services')

router.get('/v1/@all', (request, response) => {
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

router.get('/v1/getAllDBs', (request, response) => {
  let dbs = new DBViewer()
  const data = JSON.stringify(dbs.getRegisteredDatabases(), undefined, 1);

  response.status(200).send(dbs.getRegisteredDatabases());
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
router.post('/v1/registerDB', async (request, response) => {
  try {
    const dbs = new DBViewer()
    let querystmt = dbs.getRegisteredDatabases();

    querystmt.push(request.body)
    fs.writeFile('./.apiserver/databases/databases.json', JSON.stringify(querystmt, undefined, 2), 'utf8', err =>{
      if (err) return console.log(err);
    });
    response.send(querystmt)
  } catch (error) {
    response.status(400).send({message: error.message})
  }
})

/**
 * Add View
 * Agrega una vista a una bd registrada y su sentencia sql correspondiente
 * para que esta luego pueda ser invocada.
 */
router.post('/addView', (request, response) => {

})

router.post('/v1/loginidentity', (request, response) => {
  const user = 'admin'
  const pass = 'Avatar123'
  const {logonId, logonPassword} = request.body
  if (user === logonId && pass === logonPassword) {
    var token = jwt.sign({ logonId: logonId }, 'shhhhh');
    response.status(200).send({token: token})
  } else {
    response.status(401).send({message: 'No tiene Autorizacion'})
  }
})


module.exports = router