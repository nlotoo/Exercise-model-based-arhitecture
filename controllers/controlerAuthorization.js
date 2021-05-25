const { Router } = require('express')
const router = Router()
const authService = require('../services/authServices')



router.get('/login', (req, res) => {
    res.render('login')
})


router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', async (req, res) => {
    try {
        await authService.register(req.body)
    }
    catch {
        res.render('login', { error })
    }

})


module.exports = router;