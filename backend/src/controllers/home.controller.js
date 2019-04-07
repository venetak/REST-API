

class HomeController {
    constructor() {

    }

    home(req, res) {
        res.json({
            asddas:'asd'
        })
        // res.sendFile(path.resolve('/REST API/app/frontend/src/index.html'))
    }
}

module.exports = new HomeController()
