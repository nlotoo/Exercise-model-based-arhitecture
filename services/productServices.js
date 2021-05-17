const uniqueId = require('unique')
const CubeMaker = require('../models/cubic')
const database = require('../config/db.json')


function getAllData(query) {
    let result = database


    if (query.search) {
        result = database.filter(x => x.name.toLowerCase().includes(query.search))
    } else if (query.from) {
        result = database.filter(x => Number(x.difficultyLevel) >= query.from)
    } else if (query.to) {
        result = database.filter(x => Number(x.difficultyLevel) <= query.to)
    }

    return result
}

function getOne(id) {
    return database.find(x => x.id == id)

}

function create(data) {


    const cube = new CubeMaker(uniqueId(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel)

    return cube.save()



}


module.exports = {
    create,
    getAllData,
    getOne,
}