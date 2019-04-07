class Auth {
    /**
     * Checks if the user is logged
     * if the user is logged => call the next middleware function
     * if the user isn't logged => send Unauthorized
     * @param {Request} req
     * @param {Response} res
     * @param {function} next
     */
    isLogged(req, res, next) {
        if(req.session.user) {
            next()
        } else {
            res.status(401).send()
        }
    }
}

module.exports = new Auth()
