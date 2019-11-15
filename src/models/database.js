'use strict'

const MYSQL = require('./mysql');
const DB2 = require('./db2');
const MariaDB = require('./maridb')

class database{
  constructor(dbID, credentials){
    const dbs = require('../databases/databases.json')
    const db = dbs.find(db => db.id === dbID);

    if (db) {
      this.id = db.id;
      this.connection = db.connection
      this.connection.user = credentials.user;
      this.connection.password = credentials.password;
      this.views = db.views;
    }
  }

  executeView(query){
    return new Promise(async (resolve, reject) => {
      switch (this.connection.type) {
        case 'DB2':
          const db2 = new DB2(this.connection);
          const dataDb2 = await db2.executeView(query);
          resolve(dataDb2)
          break;
        
        case 'MYSQL':
          const mysql = new MYSQL(this.connection);
          const dataMysql = await mysql.executeView(query)
          resolve(dataMysql)
          break;
        
        case 'MARIADB':
          const mariadb = new MariaDB(this.connection)
          const dataMariadb = await mariadb.executeView(query)
          resolve(dataMariadb)
          break
        
        default:
          break;
      }
    })
  }
}

module.exports = database;