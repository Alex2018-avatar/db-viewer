'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('fs')

const app = express()

const dbviewer = require('../src/dbviwerGm');

// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('short'))


app.get('/getAllDBs', (req, res) => {
  const data = JSON.stringify(dbviewer.getRegisteredDatabases(), undefined, 1);
  res.send(data.concat('\n'));
});


/**
 * registerDB
 * Registra una nueva base de datos en la lista de base de datos
 * si existe el ID devuelve error
 */
app.post('/registerDB', (req, res) => {
  const dbParams = req.body;
  // PENDIENTE: Validar la estructura del objeto

  // Invocar el servicio que registra y almacena la nueva fuente de datos
  dbviewer.registerDatabase(dbParams, (error, success) => {
    // Si es error remitir el error
    if (error) return res.send(error);

    // En caso sea satisfactorio enviar una respuesta de 'Registro Exitoso'
    return res.send(success);
  });

  // PENDIENTE: Guardar en el log el resultado de la operación
})


/**
 * Add View
 * Agrega una vista a una bd registrada y su sentencia sql correspondiente
 * para que esta luego pueda ser invocada.
 */
app.post('/addView', (req, res) => {
  // console.log(req.body);
  const filename = req.headers.filename || './src/databases/databases.json';
  console.log(filename);

  let data = fs.readFileSync(filename, 'utf8');
  let databases = JSON.parse(data);

  let fileContent = [];
  fileContent.push(req.body);
  let dbobject = databases.filter(element => element.id === req.body.databseId)

  if (dbobject.length > 0) {
    let dbs = databases.reduce((total, element) => {
      if (element.id === req.body.databseId) {
        let dbViews = element.views
        req.body.views.map((element, index) =>  dbViews.push(element))
        total.push(element)
        return total
      } else {
        total.push(element)
        return total
      }
    }, [])

    fs.writeFile(filename, JSON.stringify(dbs, null, 2), err => {
      if (err) console.log(err)
      console.log('ok');
    })
  }

  res.send(';-)\n')
});

app.listen(3000, () => {
  console.log('server runngin in: http://localhost:3000')
})