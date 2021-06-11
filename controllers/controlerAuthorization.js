const { Router } = require('express')
const router = Router()
const authService = require('../services/authServices')
const { COOKIE_NAME } = require('../config/config')


const passwordValidator = require('../middleware/validateMiddleware')

const gardGuest = require('../middleware/isGuest')
const gardAuth = require('../middleware/isAuthtication')

const validator = require("validator")



router.get('/login', gardGuest, (req, res) => {
    res.render('login')
})

router.post('/login', gardGuest, async (req, res) => {

    try {
        const result = await authService.login(req.body)

        // console.log(result)
        res.cookie(`${COOKIE_NAME}`, result)
        // console.log(req.cookies)

        res.render('home')
    }
    catch (error) {
        res.render('login', { error })
    }

})


router.get('/register', gardGuest, (req, res) => {
    res.render('register')
})

router.post('/register', gardGuest, passwordValidator, async (req, res) => {
    try {

        await authService.register(req.body)
        res.render('login')
    }
    catch (error) {
        res.render('register', { error })
    }
})


router.get('/logout', gardAuth, async (req, res) => {
    res.clearCookie(COOKIE_NAME)
    res.redirect('/')
})



module.exports = router;