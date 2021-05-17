const express =require('express')
const headlebarsExpress = require('express-handlebars')
function setupExpress(app) {



    // setup express- headnlebars
    app.engine('hbs', headlebarsExpress({ extname: ".hbs" }))
    app.set('view engine', 'hbs')


    // setup middleware 
    app.use(express.static('public'))

 
}

module.exports = setupExpress;