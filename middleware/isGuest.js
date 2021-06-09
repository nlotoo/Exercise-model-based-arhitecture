module.exports = (res, req, next) => {

  

    if (res.user) {
        return req.redirect('/')
    }

    next();
}


