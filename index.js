
const express = require('express');
const app = express();

const expressConfig = require('./config/express')

const config = require('./config/config.js')
const router = require('./routes')



expressConfig(app)

app.use(router)





app.listen(config.PORT, () => console.log(`Server start at port ${config.PORT}`))