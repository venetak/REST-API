// const homeController = require('./controllers/home.controller')
const productsController = require('./controllers/products.controller')

module.exports = (app) => {
    // app.get('/', (req, res) => homeController.home(req, res))

    app.get('/products', (req, res) => productsController.getAll(req, res))
    app.post('/product', (req, res) => productsController.createProduct(req, res))

    app.get('/product/:id', (req, res) => productsController.getById(req, res))
    app.delete('/product/:id', (req, res) => productsController.de(req, res))
    app.put('/product/:id', (req, res) => productsController.updateById(req, res))
}
