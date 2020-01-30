[![Avatar Logo](https://www.avatar-global.com/website/img/logo.png)](https://www.avatar-global.com/)

# db-viewer
Database Management Module


## Installation

```bash
$ npm i db-avatar-init
```

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

## add in your package.json scripts

```json
"scripts": {
  "init-db": "db-init",
  "init-api": "init-api",
  "server": "node ./.apiserver/index.js"
},
```

# execute
- Create api folder to root path
```bash
$ npm run init-db
```

# Init gmail configurations 
- download gmail acount credentials

```bash
$ npm run mail-init
```

# Server init
- start server REST API
```bash
$ npm run server
```

# Environment Variables
### Environment variable for Authentication
- USER_TEMP_API={{username to login}}
- PASS_TEMP_API={{username passwordto login}}
- SECRET_PASS_API={{secreat to create token}}

### Environment variable app
- NODE_API_DB_PORT={{application port}}

### defaults
## License

  [MIT](LICENSE)

### Collaborators
1. First list item
   - First nested list item
   - Second nested list item