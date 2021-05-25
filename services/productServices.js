
const CubeMaker = require('../models/cubic')
const acessoryMaker = require('../models/acessory')

function getAllData(query) {
   

    let result = CubeMaker.find({}).lean()
    
    result.then(production => {
        
        
        if (query.search) {
            result = production.filter(x => x.name.toLowerCase().includes(query.search))
        }
        if (query.from) {
            result = production.filter(x => Number(x.difficultyLevel) >= query.from)
        }
        if (query.to) {
            result = production.filter(x => Number(x.difficultyLevel) <= query.to)
        }
      
    })
  
    return result
 


}

function getOne(id) {
    return CubeMaker.findById(id).lean()
}

function create(data) {
    const cube = new CubeMaker(data)
    return cube.save()
}

async function attachServices(productId, acessoryId) {
    let product = await CubeMaker.findById(productId)
    let acessory = await acessoryMaker.findById(acessoryId)

    product.accessory.push(acessory)
    return product.save()
}

function getOnewhitAcessories(id) {
    return CubeMaker.findById(id)
        .populate('accessory')
        .lean()
}


module.exports = {
    create,
    getAllData,
    getOne,
    attachServices,
    getOnewhitAcessories,

}