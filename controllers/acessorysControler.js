const { Router } = require('express');
// const acessory = require('../models/acessory');
const router = Router();

const acessoryServices=require('../services/acessoryServices')



router.get('/create', (req, res) => {
    res.render('createAccessory', {title: "Acessories"})
})

router.post('/create', (req, res) => {

//TODO: VALIDATION
    acessoryServices.createAccessory(req.body)
    .then(()=> res.redirect('/'))
    .catch(()=>res.status(500))   
});







module.exports = router;