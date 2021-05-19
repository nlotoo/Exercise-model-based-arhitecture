const { Router } = require('express');
const router = Router();




router.get('/acessory', (req, res) => {
    res.render('createAccessory', { title: 'Acessory' })
})

router.post('/acessory', (req, res) => {
    
    console.log(req.body)
    res.redirect('/home')
})



module.exports = router;