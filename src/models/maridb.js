'use strict'

const mariadb = require('mariadb')

class MariaDB {
  constructor(conn) {
    this.connection = {
      host: conn.hostname,
      port: conn.port,
      user: conn.user,
      password: conn.password,
      database: conn.database,
      connectTimeout: 500
    }
  }

  createPoolDb() {
    let conn
    try {
      const pool = mariadb.createPool(this.connection)
      return pool
    } catch (error) {
      throw new Error(`${error.code} ${error.message}`)
    } finally {
      if (conn) return conn.end();
    }
  }

  executeView(query) {
    return new Promise(async (resolve, reject) => {
      let conn;
      try {
        let pool = this.createPoolDb()
        conn = await pool.getConnection();
        const rows = await conn.query(query);
        resolve(rows)
      } catch (error) {
        reject(error)
      } finally {
        if (conn) return conn.end();
      }
    })
  }
}

module.exports = MariaDB