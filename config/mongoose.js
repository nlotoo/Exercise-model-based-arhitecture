const mongose = require('mongoose')



module.exports = () => {

    mongose.connect('mongodb://localhost/cubic', { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongose.connection

    db.on('error', () => { console.error('Conection Error!') })
    db.once('open', () => { console.log('Conection whit Mongodb') })

}