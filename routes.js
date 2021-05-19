const { Router } = require('express');
const router = Router();

//екстрактвам боду парсера
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))


const controlerProduction = require('./controllers/productController')
const aboutControler = require('./controllers/aboutController')
const NotFoundController = require('./controllers/notFoundController')

router.use('/', controlerProduction);
router.use('/create', controlerProduction);
router.use('/about', aboutControler);
router.use('/details/:id?', controlerProduction);
router.use('/acessories',controlerProduction)


router.use('*', NotFoundController)

// router.get('/', (req, res) => {
//     console.log('its works')
//     res.render('home', { layout: false })

// })

module.exports = router;