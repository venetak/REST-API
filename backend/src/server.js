const port = 3000

class Server {
    start(app) {
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }
}

module.exports = new Server()
