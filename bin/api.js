#!/usr/bin/env node

const chalk = require("chalk");
const readline = require('readline');
const boxen = require("boxen");
const fetch = require('node-fetch')

const log = console.log;

const consoleJS = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// app port
const PORT = process.env.NODE_API_DB_PORT || 3000

const greeting = chalk.white.bold('Welcome To API Management');

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "double",
  borderColor: "green",
  backgroundColor: "#555555"
};
const msgBox = boxen(greeting, boxenOptions);
console.log(msgBox);

const separator = chalk.white.magenta('----------------------------------------------------------------------------------')
const greetingq = chalk.white.cyan(`  Do you want to login? :: ${chalk.blue.underline.bold('[Y, N]')} : `);
const validArgs = chalk.white.red(`
  ----------------------------------------------------
  invalid arguments. Valid only: Y and N 
  ----------------------------------------------------
`);
const validArgsAction = chalk.white.red(`
  ----------------------------------------------------
  invalid arguments. Valid only: LIST and INSERT 
  ----------------------------------------------------
`);
const enterUser = chalk.white.green(` 
  Enter user body request: {"logonId": "XXXXXXX", "logonPassword": "XXXXXXXXX"}
  ----------------------------------------------------
`)
const userRequired = chalk.white.red(`
  ----------------------------------------------------
  User is required, try again!
  ----------------------------------------------------
`);
const actionJS = chalk.white.cyan(`
  What do you want to do? ${chalk.blue.underline.bold('[LIST, INSERT]')}
`)
const enterDBSetting = chalk.white.green(` 
  Enter new DB in json format: 
  ----------------------------------------------------
`)
// Comand
// {"logonId": "admin", "logonPassword": "Avatar123"}

consoleJS.question(greetingq, (arguments) => {
  log(separator)
  if (arguments.toUpperCase() === 'Y') {
    consoleJS.question(enterUser, async (argumentsUser) => {
      log(separator)
      if (argumentsUser) {
        try {
          let tokenJS = await login(argumentsUser);
          process.env.AUTH_API_DBVIEWER = tokenJS.token;

          consoleJS.question(actionJS, async (argumentAction) => {
            log(separator)

            if (argumentAction.toUpperCase() === 'LIST') {
              await listDatabases(process.env.AUTH_API_DBVIEWER);
              log(separator)
            } else if (argumentAction.toUpperCase() === 'INSERT') {
              await createSetting(process.env.AUTH_API_DBVIEWER)
            } else {
              console.log(validArgsAction);
              process.exit();
            }
          })
        } catch (error) {
          console.log(chalk.white.red(error.message));
          process.exit();
        }
      } else {
        console.log(userRequired)
        process.exit();
      }
    })
  } else {
    console.log(validArgs)
    process.exit();
  }
})

async function login(argumentsUser) {
  try {
    let url = `http://localhost:${PORT}/dbs/v1/loginidentity`;
    let options = {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: argumentsUser
    };
    let response = await fetch(url, options);
    log(`status response: `, response.status)
    let json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error.message)
  }
}

async function listDatabases(token) {
  try {
    let url = `http://localhost:${PORT}/dbs/v1/@all?q=`;
    let options = {
      method: 'get',
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
    let response = await fetch(url, options);
    let json = await response.json();
    console.log(json)
  } catch (error) {
    throw new Error(error.message)
  }
}


async function createSetting(token) {

  consoleJS.question(enterDBSetting, async (argumentSetting) => {
    if (argumentSetting) {
      await createSettingDB(token, argumentSetting)
      log(separator)
      consoleJS.close();
      process.stdin.destroy();
    } else {
      console.log(userRequired)
      process.exit();
    }
  })
}
async function createSettingDB(token, argumentSetting) {
  try {
    let url = `http://localhost:${PORT}/dbs/v1/registerDB`;
    let options = {
      method: 'post',
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: argumentSetting
    };
    let response = await fetch(url, options);
    log(`status response: `, response.status)
    let json = await response.json();
    console.log(json)
  } catch (error) {
    throw new Error(error.message)
  }
}