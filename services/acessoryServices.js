//const acessory = require('../models/acessory')
const Acessory = require('../models/acessory')

function getALL() {
    let data = Acessory.find().lean()
    return data
}


function createAccessory(data) {
    let acessory = new Acessory(data)
    return acessory.save()
}


function whitOutThisIds(ids) {
    return Acessory.find({ _id: { $nin: ids } }).lean()
}


module.exports = {
    createAccessory,
    getALL,
    whitOutThisIds,
}