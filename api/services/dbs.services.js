'use strict'

const DBS_PATH = '../databases/databases.json'

class DBServices {
  constructor() {
    this.databases = require(DBS_PATH);
  }
  getRegisteredDatabases() {
    return this.databases
  }
}

module.exports = DBServices