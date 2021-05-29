const config = {

    development: {
        PORT: 5000,
        SALT: 3,
    },
    production: {
        PORT: 80,
        SALT: 5,

    }
}

module.exports = config[process.env.NODE_ENV.trim()]