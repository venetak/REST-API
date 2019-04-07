const Controller = require('./controller')

class UserController extends Controller{
    login(req, res) {
        const reqBody = req.body
        if(reqBody.username === 'admin' && reqBody.password === 'admin') {
            req.session.user = reqBody.username
            this.sendResSuccess(res)
        } else {
            this.sendResError(res, 'No such user')
        }
    }

    logout(req, res) {
        req.session.user = null
        this.sendResSuccess(res)
    }
}

module.exports = new UserController()
