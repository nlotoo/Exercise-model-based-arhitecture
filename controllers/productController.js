const { Router } = require('express');
const router = Router();



const productServices = require('../services/productServices')
const acessoryServices = require('../services/acessoryServices')


router.get('/', (req, res) => {


    productServices.getAllData(req.query)
        .then(product => {
            res.render('home', { title: 'Home', product })
        })
        .catch(() => res.status(500).end)
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' })
})
router.post('/create', (req, res) => {
    let data = req.body

    // TODO: VALIDATION

    productServices.create(data)
    res.redirect('/')

})

router.get('/details/:id?', async (req, res) => {

    let product = await productServices.getOnewhitAcessories(req.params.id)
    let acessories = product.accessory

    res.render('details', { title: 'Details', product, acessories })

})

router.get('/:accessoryId/attach', async (req, res) => {
    let product = await productServices.getOne(req.params.accessoryId)
    let acessories = await acessoryServices.whitOutThisIds(product.accessory)
 
    res.render('attachAccessory', { title: 'Attach acessory', product, acessories })
})

router.post('/:accessoryId/attach', (req, res) => {
    productServices.attachServices(req.params.accessoryId, req.body.accessory)
        .then(() => res.redirect('/'))

})






module.exports = router;