class Auth {
    isLogged(req, res, next) {
        if(req.session.user) {
            next()
        } else {
            res.status(401).send()
        }
    }
}

module.exports = new Auth()
