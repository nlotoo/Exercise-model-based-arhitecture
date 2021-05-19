const uniqueId = require('unique')
const CubeMaker = require('../models/cubic')
const database = require('../config/db.json')


function getAllData(query) {
    // let result = CubeMaker.getAll()
    let result = CubeMaker.find({}).lean()

    if (query.search) {
        result = database.filter(x => x.name.toLowerCase().includes(query.search))
    }
    if (query.from) {
        result = database.filter(x => Number(x.difficultyLevel) >= query.from)
    }
    if (query.to) {
        result = database.filter(x => Number(x.difficultyLevel) <= query.to)
    }

    return result

}

function getOne(id) {
    return CubeMaker.getOne(id)

}

function create(data) {


    const cube = new CubeMaker(data)

    return cube.save()



}


module.exports = {
    create,
    getAllData,
    getOne,
}