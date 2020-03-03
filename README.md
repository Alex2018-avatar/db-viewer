<div align="center">
  <a href="https://github.com/Alex2018-avatar/db-viewer">
    <img width="200" height="200" src="https://cdn2.vectorstock.com/i/1000x1000/78/46/blue-database-icon-circle-frame-white-background-v-vector-20757846.jpg">
  </a>
  <br>
  <br>

<!-- [![npm][npm]][npm-url]

[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![builds][builds]][builds-url]
[![builds2][builds2]][builds2-url]
[![coverage][cover]][cover-url]
[![licenses][licenses]][licenses-url]
[![PR's welcome][prs]][prs-url] -->

  <br>
  <!-- <a href="https://dependabot.com/compatibility-score.html?dependency-name=webpack&package-manager=npm_and_yarn&new-version=latest">
    <img src="https://api.dependabot.com/badges/compatibility_score?dependency-name=webpack&package-manager=npm_and_yarn&version-scheme=semver&target-version=latest">
  </a>
	<a href="https://npmcharts.com/compare/webpack?minimal=true">
		<img src="https://img.shields.io/npm/dm/webpack.svg">
	</a>
	<a href="https://packagephobia.now.sh/result?p=webpack">
		<img src="https://packagephobia.now.sh/badge?p=webpack" alt="install size">
	</a>
	<a href="https://opencollective.com/webpack#backer">
		<img src="https://opencollective.com/webpack/backers/badge.svg">
	</a>
	<a href="https://opencollective.com/webpack#sponsors">
		<img src="https://opencollective.com/webpack/sponsors/badge.svg">
	</a>
	<a href="https://github.com/webpack/webpack/graphs/contributors">
		<img src="https://img.shields.io/github/contributors/webpack/webpack.svg">
	</a>
	<a href="https://gitter.im/webpack/webpack">
		<img src="https://badges.gitter.im/webpack/webpack.svg">
	</a> -->
  <h1>db-viewer</h1>
  <p>
    db-viewer is a package of modules. Its main objective is to easily configure and use different databases.
  </p>
</div>
<div align="left">
  <p>it also includes:</p>
  <ol>
    <li>- generate credentials using the command line.</li>
  </ol>
</div>

## Table of contents

1. [Install](#install)
2. [Introduction](#introduction)
3. [Concepts](#concepts)
3. [Examples](#examples)
4. [Credentials](#credentials)
5. [Configuration](#configuration)
6. [Test](#test)
6. [Help](#help)
7. [License](#license)


<!-- [![Avatar Logo](https://www.avatar-global.com/website/img/logo.png)](https://www.avatar-global.com/) -->
<h2 align="center">Install</h2>
Install with npm:

```bash
npm install db-avatar-init
```

<h2 align="center">Introduction</h2>

db-viewer is a package of modules. Its main objective is to easily configure and use different databases.

<h2 align="center">Examples</h2>

## Usage
```js

'use strict' 

const DBViewer = require('db-avatar-init')

const options = {
  dbId: 000000,
  viewName: 'xxxxx.sql',
  user: 'xxxxx',
  password: 'xxxx'
};

DBViewer.executeView(options, (error, data) => {
  if(error) {
    console.log(error.message)
  } else {
    console.log(data)
  }
})
```

**Add**: in your package.json

```json
"scripts": {
  "init-db": "init-db",
  "init-api": "init-api",
  "server": "node ./.apiserver/index.js"
},
```

**Execute**: Create api folder to root path
```bash
 npm run init-db
```

**Start**: Start server REST API
- default port 3200
- test: http://localhost:3000/

```bash
npm run server
```

<h2 align="center">Configuration</h2>

**Environment Variables**: Environment Variables API configuration
#### Environment variable for Authentication
- USER_TEMP_API={{username to login}}
- PASS_TEMP_API={{username passwordto login}}
- SECRET_PASS_API={{secreat to create token}}

#### Environment variable app
- NODE_API_DB_PORT={{application port}}

<h2 align="center">Test</h2>
Test Api rest using command line

**Execute**: to call api rest
```bash
 npm run init-api
```

```bash
Do you want to login? :: [Y, N] : 

Enter user body request: {"logonId": "XXXXXXX", "logonPassword": "XXXXXXXXX"}
----------------------------------------------------

status 200

 What do you want to do? [LIST, INSERT]
```

<h2 align="center">Help</h2>

**Note**: Not all options are currently supported.

<h2 align="center">License</h2>

  [MIT](LICENSE)