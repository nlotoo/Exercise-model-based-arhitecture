const mongoose = require('mongoose')


let userSchema = new mongoose.Schema({

    login: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }

})


module.exports = mongoose.model('Users', userSchema)