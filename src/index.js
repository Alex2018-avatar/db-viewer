'use strict'

const fs = require('fs')
const { Mail, Message } = require('gmailclient')
const moment = require('moment')
const fetch = require('node-fetch')


const Database = require('./main/database')
// const DBS_PATH = './databases/databases.json'

class DBViewer {
  constructor() {
    // this.databases = require(DBS_PATH)
    this.databases = this.getDatabases()
  }

  getDatabases() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:3000/dbs/v1/getAllDBs')
        const json = await response.json()
        resolve(json)
      } catch (error) {
        reject(error)
      }
    })
  }

  getById(dbId) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`http://localhost:3000/dbs/v1/getById/${dbId}`)
        const json = await response.json()
        resolve(json)
      } catch (error) {
        reject(error)
      }
    })
  }

  async getRegisteredDatabases() {
    return await this.databases
  }

  registerDatabase(dbParams, callback) {
    // buscar si se encuentra en la lista de bds configuradas
    let db = this.databases.find(database => database.id === dbParams.id);
    if (db) {
      console.log('base de datos ya existe');
      callback('❌ ERROR: base de datos ya existe\n\n', null)

    } else {
      db = {}
      db.id = dbParams.id;
      db.connection = dbParams.connection;
      db.connection["user"] = '';
      db.connection["password"] = '';
      db["views"] = [];
      this.databases.push(db);
      // Guardar la nueva versión de databases.json
      /*fs.writeFile('./src/databases/databases.json', JSON.stringify(this.databases, undefined, 2), 'utf8', err =>{
        if (err) return console.log(err);
      }); */
      callback(null, `✅ EXITO: Registro de base de datos ${dbParams.id}\n\n`);
    }
  }




  unlinkFile(filePaht) {
    try {
      fs.unlinkSync(filePaht)
      console.log('... file deleted!')
    } catch (error) {
      console.log(error.message)
    }
  }

  async sendMail(attachment, options) {
    try {
      const mail_client = new Mail()
      const { subject, htmlBody, mailConfig } = options;
      const { from, to, cc, bcc } = mailConfig

      const message = new Message('html');
      message.compose(from, to, cc, bcc, subject, htmlBody || '');
      attachment ? message.addAttachment(attachment) : ''
      await mail_client.send(message);
      return {}
    } catch (error) {
      console.log(error.message)
      throw new Error(error)
    }
  }

  async executeView(options, mailOptions = {}, callback) {
    try {
      // database options
      const { dbId, viewName, user, password } = options;
      const credentials = { 'user': user, 'password': password };
      const { mail } = mailOptions

      let json = await this.getById(dbId)

      // get database configuration
      const db = new Database(dbId, credentials, json)

      // get sql query view
      const view = db.views.filter(view => view.name === viewName);

      let fileName = moment().unix()
      const fileNamePath = `${fileName}.json`

      if (view.length === 0) {
        console.log('process canceled, not found view')
      } else {
        let querystmt = await fs.readFileSync(view[0].path, 'utf8');
        let data = await db.executeView(querystmt)

        // write json data from db
        fs.writeFileSync(fileNamePath, JSON.stringify(data, null, "\t"), { mode: 0o666 || MODE_0666 })

        if (mail) {
          await this.sendMail(fileNamePath, mailOptions)
          this.unlinkFile(fileNamePath)
          callback(null, data)
        } else {
          this.unlinkFile(fileNamePath)
          callback(null, data)
        }
      }
    } catch (exception) {
      console.log(exception.message)
    }
  }
}

module.exports = new DBViewer