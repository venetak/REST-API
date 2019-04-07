class Controller {
    getIdQuery(req) {
        return { _id: req.params.id }
    }

    sendResError(res, error) {
        res.status(400).send(error)
        console.error(error)
    }

    sendNotFound(res) {
        res.status(404).send()
    }

    sendResSuccess(res, data = {}) {
        res.status(200)
        res.json(data)
    }

    redirect(res, path) {
        res.status(302)
        res.redirect(path)
    }
}

module.exports = Controller
