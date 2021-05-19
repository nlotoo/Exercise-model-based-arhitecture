const acessoryModel = require('../models/acessory')


function createAccessory(data) {

    let acessory = new acessoryModel(data)


    console.log(acessory)
    return acessory.save()

}


module.exports = {
    createAccessory,
}