const Controller = require('./controller')

class UserController extends Controller {
    /**
     * Checks if the username and teh password are correct
     * and sets the user property to the session object
     * @param {Request} req
     * @param {Response} res
     */
    login(req, res) {
        const reqBody = req.body
        if (reqBody.username === 'admin' && reqBody.password === 'admin') {
            req.session.user = reqBody.username
            this.sendResSuccess(res)
        } else {
            this.sendResError(res, 'No such user')
        }
    }

    /**
     * Sets the  user property of the session object to null
     * @param {Request} req
     * @param {Response} res
     */
    logout(req, res) {
        req.session.user = null
        this.sendResSuccess(res)
    }
}

module.exports = new UserController()
