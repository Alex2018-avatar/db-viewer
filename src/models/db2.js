'use strict'

const ibmdb = require('ibm_db')

class DB2 {
  constructor(connection) {
    this.cnnString = [
      `DATABASE=${connection.database}`,
      `HOSTNAME=${connection.hostname}`,
      `UID=${connection.user}`,
      `PWD=${connection.password}`,
      `PORT=${connection.port}`,
      `PROTOCOL=TCPIP`
    ].join(';')
  }

  executeView(query) {
    return new Promise(async (resolve, reject) => {
      try {
        ibmdb.open(this.cnnString)
          .then(cnn => {
            cnn.query(query, (error, data) => {
              if (error) {
                reject(error)
              } else {
                resolve(data)
              }
            });
          })
          .catch(err => {
            reject(err)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

  executeViewSync(query) {
    try {
      const cnn = ibmdb.openSync(this.cnnString);
      const rslt = cnn.querySync(query);
      return rslt;

    } catch (err) {
      console.log(err);
      return 'Error in execute query';
    }

  }
}

module.exports = DB2