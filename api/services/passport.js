'use strict'

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
  done(null, user.uniqueId)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

passport.use(new LocalStrategy(
  {  usernameField: 'email' },
  (email, password, done) => {
    User.findOne({email}, (err, user) => {
      if (!user) {
        return done(null, false, {message: `Este Mail ${email} no esta regitrado`})
      } else {
        user.comparePassword(password, (err, sonIguales) => {
          if (sonIguales) {
            return done(null, user)
          } else {
            return done(null, false, {message: 'este password no es valida'})
          }
        })
      }     
    })
  }
))


exports.isAutenticated = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next()
  }
  response.status(401).send({message: 'Inicia session para acceder'})
}