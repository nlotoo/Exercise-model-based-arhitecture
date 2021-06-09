module.exports = (res, req, next) => {


    if (!res.user) {
        return req.redirect('/auth/login')
    }

    next();
}
