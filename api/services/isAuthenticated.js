'use strict'
const jwt = require('jsonwebtoken');

exports.isAuthenticated = (request, res, next) => {
  const secret = process.env.SECRET_PASS_API || 'SAKLSJADsajkdh231jkdsfkjsd##asjdkhkhsjHSKJADHKJSAajsadkas'
  const authToken = request.headers.authorization;
  const QUERY_AUTHORIZACION_KEY = 'authorization';
  const HEADER_AUTHORIZACION_KEY = 'Bearer';

  if (!authToken) {
    return res.status(403).send({
      status: 403,
      message: 'FORBIDDEN'
    })
  } else {
    let parts = request.headers.authorization.split(' ');

    if (parts.length === 2 && parts[0] === HEADER_AUTHORIZACION_KEY) {
      jwt.verify(parts[1], secret, function(err, decoded) {
        if (err) {
          return res.status(401).send({
            status: 401,
            message: err.message || 'UNAUTHORIZED'
          })
        } else {
          next()
        }
      })
    } else {
      return res.status(403).send({
        status: 403,
        message: 'FORBIDDEN'
      })
    }
  }
}