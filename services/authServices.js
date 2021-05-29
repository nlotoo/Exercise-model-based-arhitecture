const Users = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = async (userData) => {

    if (userData.password !== userData.repeatPassword) {
        throw ({ message: 'Password don`t match' })

    }

    const salt = await bcrypt.genSalt(3)
    const hash = await bcrypt.hash(userData.password, salt)
    let lowercase = userData.username.toLowerCase()
    const user = new Users({ login: lowercase, password: hash })
    return user.save()
}

const login = async (userData) => {
    const username = userData.username.toLowerCase()
    const pass = userData.password
    const user = await Users.findOne({ login: username })

    if (!user) {
        throw ({ message: 'User is not found' })
    }

    let istMatch = await bcrypt.compare(pass, user.password)

    if (!istMatch) {
        throw ({ message: 'User is not found' })
    }

    let token = jwt.sign({ TOKEN: user._id }, 'secretId')


    return token
}



module.exports = {
    register,
    login,
}