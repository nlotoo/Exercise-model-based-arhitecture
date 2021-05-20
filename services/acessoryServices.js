const Acessory = require('../models/acessory')



function getALL(){

    let data = Acessory.find().lean()
    return data
}




function createAccessory(data) {

    let acessory = new Acessory(data)
    return acessory.save()
}


module.exports = {
    createAccessory,
    getALL,
}