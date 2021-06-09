const express = require('express')
const headlebarsExpress = require('express-handlebars')
const cookieParser = require('cookie-parser')

const auth = require('../middleware/auth')



function setupExpress(app) {

    // setup express- headnlebars
    app.engine('hbs', headlebarsExpress({ extname: ".hbs" }))
    app.set('view engine', 'hbs')

    // setup middleware 
    app.use(express.static('public'))
    app.use(cookieParser())
    app.use(auth())
}

module.exports = setupExpress;