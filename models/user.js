const mongoose = require('mongoose')
const uniqID = require('uniqid')

let userSchema = new mongoose.Schema({

    
    login: {
        required: true,
        type: String
    },
    pasword: {
        required: true,
        type: String
    }

})


module.exports = mongoose.model('userMaker', userSchema)