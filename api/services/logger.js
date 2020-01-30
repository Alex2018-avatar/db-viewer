'use strict'
/**
 * @fileoverview: file that contains logger app configurations
 * --
 */

// Calling dependencies
const winston = require('winston')
const moment = require('moment');
const {
  format
} = require('winston')

const {
  timestamp,
  printf,
  align,
  simple,
  colorize
} = format;
const MESSAGE = Symbol.for('message');

// define the custom settings for each transport (file, console)
const suprimirLogs = false;

const jsonFormatter = (logEntry) => {
  let {
    level: levelLog
  } = logEntry;

  const base = {
    date: moment().format('YYYY-MM-DD HH:mm:ss'),
    level: levelLog
  };
  delete logEntry['level']

  const json = Object.assign(base, logEntry);
  logEntry[MESSAGE] = JSON.stringify(json);
  return logEntry;
}

var options = {
  file: {
    level: 'info',
    filename: `${__dirname}/../logs/applications-logs.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
  },
  infoFile: {
    name: 'file#info',
    level: 'info',
    filename: `${__dirname}/../logs/applications-logs-success.log`,
    handleExceptions: false,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
    format: format(jsonFormatter, format.simple())(),
  },

  // In development mode
  console: {
    level: getLevelLogger(process.env.NODE_ENV), //suprimirLogs ? 'error' : 'debug',
    handleExceptions: true,
    json: true,
    colorize: true,
    format: winston.format.combine(
      simple(),
      colorize(),
      timestamp({
        format: 'MM-YY-DD HH:mm:ss'
      }),
      align(),
      printf(info => `${info.timestamp} [${info.level}]: ${info.message}` + (info.splat !== undefined ? `${info.splat}` : " ")),
    )
  },
};
console.log(`${__dirname}/../logs/applications-logs-success.log`)
function getLevelLogger(environment) {
  if (environment === 'production') {
    return 'info'
  } else {
    return 'debug'
  }
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.File(options.infoFile),
    new winston.transports.File({
      name: 'file#error',
      level: 'error',
      filename: `${__dirname}/../logs/applications-logs-error.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: true,
    }),
  ],
  exitOnError: false,
})

// if (process.env.NODE_ENV !== 'production') {
logger.add(new winston.transports.Console(options.console));
// }

module.exports = logger