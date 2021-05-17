const fs = require('fs')
const path = require('path')

const database = require('../config/db.json')

class Cube {
    constructor(id, name, description, imageUrl, difficultyLevel) {
        this.id = id
        this.name = name
        this.description = description
        this.imageUrl = imageUrl
        this.difficultyLevel = difficultyLevel
    }

    save() {
        database.push(this)
        return fs.writeFile(path.join(__dirname, '/../config/db.json'), JSON.stringify(database), (err) => {
            if (err) {
                console.log(err)
                return
            }
        })
    }

    static getAll() {
    
        return database;

    }
    static getOne(id) {
        database.find(x => x.id == id)
    }

}

module.exports = Cube;