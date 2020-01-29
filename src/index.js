'use strict'

const fs = require('fs')
const moment = require('moment')
const fetch = require('node-fetch')


const Database = require('./main/database')

class DBViewer {
  constructor() {
    // this.databases = require(DBS_PATH)
    //this.databases = this.getDatabases()
  }

  getDatabases() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${process.env.URL_SEARCH_DB_VIEWER || 'http://localhost:3000'}/dbs/v1/getAllDBs`)
        if (response.status === 200) {
          const json = await response.json()
          resolve(json)
        } else {
          throw new Error({message: `${response.status}`})
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  getById(dbId) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${process.env.URL_SEARCH_DB_VIEWER || 'http://localhost:3000'}/dbs/v1/getById/${dbId}`)
        if (response.status === 200) {
          const json = await response.json()
          resolve(json)
        } else {
          throw new Error({message: `${response.status}`})
        }
      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }

  unlinkFile(filePaht) {
    try {
      fs.unlinkSync(filePaht)
      console.log('... file deleted!')
    } catch (error) {
      console.log(error.message)
    }
  }


  async executeView(options, callback) {
    try {
      // database options
      const { dbId, viewName, user, password } = options;
      const credentials = { 'user': user, 'password': password };

      let json = await this.getById(dbId)
      // get database configuration
      const db = new Database(dbId, credentials, json)

      if (db.views) {
        // get sql query view
        const view = db.views.filter(view => view.name === viewName);

        let fileName = moment().unix()
        const fileNamePath = `${fileName}.json`

        if (view.length === 0) {
          console.log('process canceled, not found view')
        } else {
          const pathViews = process.env.PATH_BASE_VIEWS || './.apiserver/databases/'
          let querystmt = await fs.readFileSync(`${pathViews}${view[0].path}`, 'utf8');

          let data = await db.executeView(querystmt)

          // write json data from db
          fs.writeFileSync(fileNamePath, JSON.stringify(data, null, "\t"), { mode: 0o666 || MODE_0666 })
          this.unlinkFile(fileNamePath)
          callback(null, data);
        }
      } else {
        callback({message: 'No se encontro base de datos'})
      }
    } catch (exception) {
      console.log(exception.message)
    }
  }
}

module.exports = new DBViewer