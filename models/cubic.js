

const mongoose = require('mongoose')



let cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
        maxlength: 50,

    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessory: [{
        type: mongoose.Types.ObjectId,
        ref: 'acessoryMaker'

    }]
})










// class Cube {
//     constructor(id, name, description, imageUrl, difficultyLevel) {
//         this.id = id
//         this.name = name
//         this.description = description
//         this.imageUrl = imageUrl
//         this.difficultyLevel = difficultyLevel
//     }

//     save() {
//         database.push(this)
//         return fs.writeFile(path.join(__dirname, '/../config/db.json'), JSON.stringify(database), (err) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//         })
//     }

//     static getAll() {

//         return database;

//     }
//     static getOne(id) {
//         database.find(x => x.id == id)
//     }

// }

// module.exports = Cube;



module.exports = mongoose.model('cube', cubeSchema);