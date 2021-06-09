const { Router } = require('express');
const router = Router();

//екстрактвам боду парсера
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))

const gardAuth = require('./middleware/isAuthtication')



const controlerProduction = require('./controllers/productController')
const aboutControler = require('./controllers/aboutController')
const NotFoundController = require('./controllers/notFoundController')
const acsecsoryControler = require('./controllers/acessorysControler')
const controlerAuth = require('./controllers/controlerAuthorization')



router.use('/', controlerProduction);
router.use('/auth', controlerAuth);
router.use('/create', controlerProduction);
router.use('/acessories', gardAuth, acsecsoryControler)
router.use('/about', aboutControler);
router.use('/details/:id?', controlerProduction);


router.use('*', NotFoundController)


module.exports = router;