const config = {

    development: {
        PORT: 5000,
        SALT: 3,
        COOKIE_NAME:'SESSION_TOKEN.',
        SECRET: 'secretId'
    },
    production: {
        PORT: 80,
        SALT: 5,
        COOKIE_NAME:'SESSION_TOKEN',
        SECRET: 'secretId'
    }
}

module.exports = config[process.env.NODE_ENV.trim()]