class HomeController {
    home(req, res) {
        res.json({
            hello: 'Hello, world!'
        })
    }
}

module.exports = new HomeController()
