const { Router } = require('express');
const router = Router();



const productServices = require('../services/productServices.js')


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


router.get('/details/:id?', (req, res) => {

    productServices.getOne(req.params.id)
        .then(product => {
            res.render('details', { title: 'Details', product })

        })
        .catch(() => res.status(500))
    // console.log({ product })

})




module.exports = router