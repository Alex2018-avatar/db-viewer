'use strict'

const MYSQL = require('../models/mysql');
const DB2 = require('../models/db2');
const MariaDB = require('../models/maridb')

class database{
  constructor(dbID, credentials, dbs){
    // const dbs = require('../api/databases/databases.json')
    const db = dbs.find(db => db.id === dbID);

    if (db) {
      this.id = db.id;
      this.connection = db.connection
      this.connection.user = credentials.user;
      this.connection.password = credentials.password;
      this.views = db.views;
      this.type = db.type;
    }
  }

  executeView(query){
    return new Promise(async (resolve, reject) => {
      switch (this.type) {
        case 'DB2':
          try {
            const db2 = new DB2(this.connection);
            const dataDb2 = await db2.executeView(query);
            resolve(dataDb2)
          } catch (error) {
            reject(error.message)
          }
          
          break;
        
        case 'MYSQL':
          try {
            const mysql = new MYSQL(this.connection);
            const dataMysql = await mysql.executeView(query)
            resolve(dataMysql)
          } catch (error) {
            reject(error.message)
          }
          break;
        
        case 'MARIADB':
          try {
            const mariadb = new MariaDB(this.connection)
            const dataMariadb = await mariadb.executeView(query)
            resolve(dataMariadb)
          } catch (error) {
            reject(error.message)
          }
          break
        
        default:
            reject({message: 'not found database'})
          break;
      }
    })
  }
}

module.exports = database;