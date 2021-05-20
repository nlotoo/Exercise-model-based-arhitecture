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


    // let product = await productServices.getOne(req.params.id);

   
     let product = await productServices.getOnewhitAcessories(req.params.id)


    // console.log(product)

    // console.log(product.accessory)


    console.log(product)
    res.render('details', { title: 'Details', product })



})



router.get('/:accessoryId/attach', async (req, res) => {
    let product = await productServices.getOne(req.params.accessoryId)
    let acessories = await acessoryServices.getALL()

    res.render('attachAccessory', { title: 'Attach acessory', product, acessories })

})

router.post('/:accessoryId/attach', (req, res) => {
    productServices.attachServices(req.params.accessoryId, req.body.accessory)
        .then(() => res.redirect('/'))

})






module.exports = router;