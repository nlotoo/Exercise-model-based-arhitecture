const e = require('express')
const { COOKIE_NAME } = require('../config/config')
const { SECRET } = require('../config/config')
const jwt = require('jsonwebtoken')

module.exports = function () {

    return (req, res, next) => {
        let token = req.cookies[COOKIE_NAME]
        if (token) {
            jwt.verify(token, SECRET, function (err, decoded) {
                if (err) {
                    res.clearCookie(COOKIE_NAME)
                }
                else {
                    req.user = decoded
                    res.locals.user = req.user
                    res.locals.isAuthticated = true

                }
            })
        }
        next()
    }
}