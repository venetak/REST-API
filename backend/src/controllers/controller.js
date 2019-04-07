class Controller {
    /**
     * Creates and returns a object used as mongoose query
     * @param {Request} req
     * @returns {object}
    */
    getIdQuery(req) {
        return { _id: req.params.id }
    }

    /**
     * Sends an error response
     * @param {Response} res
     * @param {string} error
     */
    sendResError(res, error) {
        res.status(400).send(error)
        console.error(error)
    }

    /**
     * Sends not found response
     * @param {Response} res
     */
    sendNotFound(res) {
        res.status(404).send()
    }

    /**
     * Sends success response
     * @param {Response} res
     * @param {object} data
     */
    sendResSuccess(res, data = {}) {
        res.status(200)
        res.json(data)
    }

    /**
     * Redirects to a given URL
     * @param {Response} res
     * @param {string} path
     */
    redirect(res, path) {
        res.status(302)
        res.redirect(path)
    }
}

module.exports = Controller
