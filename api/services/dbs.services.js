'use strict'

class DBServices {
  constructor() {
    this.databases = require('../databases/databases.json');
  }
  getRegisteredDatabases() {
    return this.databases
  }

  loadData (path) {
    try {
      return this.databases
    } catch (err) {
      console.error(err)
      return false
    }
  }
}

module.exports = DBServices