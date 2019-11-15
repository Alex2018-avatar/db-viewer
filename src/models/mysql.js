'use strict'

const mysql = require('mysql')

class MYSQL {
  constructor(cnn) {
    this.connection = {
      database: cnn.database,
      host: cnn.hostname,
      user: cnn.user,
      password: cnn.password,
      port: cnn.port
    }
  }

  executeView(query) {
    return new Promise(async (resolve, reject) => {
      try {
        const poolcnn = mysql.createPool(this.connection);
        poolcnn.getConnection((err, connection) => {
          connection.query(query, (error, data) => {
            if (error) {
              reject(error)
            } else {
              if (connection) connection.release()
              resolve(data)
            }
          })
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = MYSQL;