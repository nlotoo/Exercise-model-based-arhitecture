
const mongoose = require('mongoose')


let accessorySchema = new mongoose.Schema({

    id= mongoose.Types.ObjectId,
    name: {
        required: true,
        type: String
    },
    imageUrl: {
        required: true,
        type: String,
        validate: /https?/,

    },
    description: {
        required: true,
        type: String,
        maxlength: 50,
    }
})

module.exports = mongoose.model('acessory', accessorySchema)