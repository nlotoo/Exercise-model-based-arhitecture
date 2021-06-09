
const express = require('express');

const app = express();

const expressConfig = require('./config/express')
require('./config/mongoose.js')(app);



expressConfig(app)
const config = require('./config/config.js')
const router = require('./routes')




app.use(router)





app.listen(config.PORT, () => console.log(`Server start at port ${config.PORT}`))