
const validator = require('validator')

module.exports = (req, res, next) => {


    let password = req.body.password

    let isStrongPass = validator.isStrongPassword(password,
        {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })

    if (!isStrongPass) {
        return res.render('register', { error: { message: 'password should be more strong' }, username: req.body.username })
    }
    next()
}


// module.exports = {
//     isValidatorMiddleware,
// }