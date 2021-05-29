const { Router } = require('express')
const router = Router()
const authService = require('../services/authServices')



router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', async (req, res) => {

    try {
        const result = await authService.login(req.body)

        res.cookie(`SESSION_TOKEN = ${result}`)
        res.render('home')
    }
    catch (error) {
        res.render('login', { error })
    }

})


router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', async (req, res) => {
    try {
        await authService.register(req.body)
        res.render('login')
    }
    catch (error) {
        res.render('register', { error })
    }
})




module.exports = router;