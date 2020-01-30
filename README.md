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
  "db-init": "db-init",
  "mail-init": "init-credentials"
},
```

# execute
- Create api folder to root path
```bash
$ npm run db-init
```

# Init gmail configurations 
- download gmail acount credentials

```bash
$ npm run mail-init
```

```bash
Do you want to create a credential structure path? yes || no > - type yes to init credentials
Please enter gmail credentials [in json format] ? - enter google credentials downloaded from google account
ownload the confirmation code of: https://...... - copy and paste the url in the browser
Ingrese Codigo: - paste the confirmation code from the url
```
## License

  [MIT](LICENSE)

### Collaborators
1. First list item
   - First nested list item
     - Second nested list item


#process.env.NODE_API_DB_SETUP=OK