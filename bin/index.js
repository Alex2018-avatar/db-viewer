#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const mkdirp = require('mkdirp')
const fs = require('fs')
const minimatch = require('minimatch')
const path = require('path')
const childProcess = require('child_process');
const {exec, fork, spawn } = require('child_process');
const os = require('os');
const shell = require('shelljs')

// main customs
const MODE_0666 = parseInt('0666', 8)
const MODE_0755 = parseInt('0755', 8)
const _exit = process.exit
const ROOT_API_DIR = path.join(__dirname, '..', 'api')

const greeting = chalk.white.bold('Welcome To db Package');

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "double",
  borderColor: "green",
  backgroundColor: "#555555"
};
const msgBox = boxen(greeting, boxenOptions);
console.log(msgBox);

console.log(os.platform())

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Inclusão do Text e mais as definições do ‘chalk’:
const data = {
  name: chalk.white('Glaucia Lemos /'),
  handle: chalk.cyan('glaucia_lemos86'),
  work: chalk.white('Regional Cloud Developer at Microsoft'),
  twitter: chalk.cyan('https://twitter.com/AvatarSAC'),
  github: chalk.cyan('https://github.com/glaucia86'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/glaucialemos/'),
  facebook: chalk.cyan('https://www.facebook.com/pages/Avatar-SAC/129493277079356'),
  medium: chalk.cyan('https://medium.com/@glaucia86'),
  web: chalk.cyan('https://www.avatar-global.com/'),
  npx: chalk.white('npx glaucia_lemos86'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelMedium: chalk.white.bold('    Medium:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const mediuming = `${data.labelMedium}  ${data.medium}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar 
// o ‘boxen de maneira efetiva: 
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + mediuming + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))

// console.log(greeting1);

//var destinationPath = program.args.shift() || '.'
console.log('-----------')
//console.log(destinationPath)


/**
 * Make the given dir relative to base.
 *
 * @param {string} base
 * @param {string} dir
 */

function mkdir(base, dir) {
  var loc = path.join(base, dir)

  console.log('   \x1b[36mcreate\x1b[0m : ' + loc + path.sep)
  mkdirp.sync(loc, MODE_0755)
}

/**
 * Copy file from template directory.
 */

function copyTemplate(from, to) {
  write(to, fs.readFileSync(path.join(ROOT_API_DIR, from), 'utf-8'))
}

function createApplication(name, dir) {
  var app = loadTemplate('index.js')

  console.log(app)
  // Package
  var pkg = {
    name: name,
    version: '1.0.0',
    private: true,
    scripts: {
      start: 'node index.js'
    },
    dependencies: {
      'debug': '~2.6.9',
      'express': '^4.17.1'
    }
  }
  mkdir(dir, 'databases/queries')
  mkdir(dir, 'models/')
  mkdir(dir, 'services/')
  //mkdir(dir, 'public/images')
  //mkdir(dir, 'public/stylesheets')

  // copy route templates
  mkdir(dir, 'routes')

  //copyTemplate('index.html', path.join(dir, 'index.html'))
  copyTemplate('index.js', path.join(dir, 'index.js'))
  copyTemplateMulti('routes', dir + '/routes', '*.js')
  copyTemplateMulti('services', dir + '/services', '*.js')

  write(path.join(dir, 'package.json'), JSON.stringify(pkg, null, 2) + '\n')

  // start app
  shell.exec('sh ./bin/build.sh')
}

// INIT APP STRUCTURE PROJECT
if (os.platform() === 'win32') {
  createApplication('server', path.join(__dirname, '..', '.apiserver'))
} else {
  createApplication('server', path.join(__dirname, '..', '.apiserver'))
}

// Working directory for subprocess of installer
const cwd = path.join(__dirname, '..', '.apiserver')


// exec('sh ./bin/build.sh hola juam', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });






/**pwd
 * echo str > file.
 *
 * @param {String} file
 * @param {String} str
 */

function write(file, str, mode) {
  fs.writeFileSync(file, str, { mode: mode || MODE_0666 })
  console.log('   \x1b[36mcreate\x1b[0m : ' + file)
}

/**
 * Copy multiple files from template directory.
 */

function copyTemplateMulti(fromDir, toDir, nameGlob) {
  fs.readdirSync(path.join(ROOT_API_DIR, fromDir))
    .filter(minimatch.filter(nameGlob, { matchBase: true }))
    .forEach(function (name) {
      copyTemplate(path.join(fromDir, name), path.join(toDir, name))
    })
}

/**
 * Load template file.
 */

function loadTemplate(name) {
  var contents = fs.readFileSync(path.join(__dirname, '..', 'api', (name + '')), 'utf-8')
  var locals = Object.create(null)

  function render() {
    return ejs.render(contents, locals, {
      escape: util.inspect
    })
  }

  return {
    locals: locals,
    render: render
  }
}