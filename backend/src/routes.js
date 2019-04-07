const homeController = require('./controllers/home.controller')
const productsController = require('./controllers/products.controller')
const ordersController = require('./controllers/orders.controller')

module.exports = (app) => {
    app.get('/', (req, res) => homeController.home(req, res))

    app.get('/products', (req, res) => productsController.getAll(req, res))
    app.post('/product', (req, res) => productsController.createProduct(req, res))

    app.get('/product/:id', (req, res) => productsController.getById(req, res))
    app.delete('/product/:id', (req, res) => productsController.deleteById(req, res))
    app.put('/product/:id', (req, res) => productsController.updateById(req, res))

    app.get('/orders', (req, res) => ordersController.getAll(req, res))
    app.post('/order', (req, res) => ordersController.createOrder(req, res))

    app.get('/order/:id', (req, res) => ordersController.getOrderById(req, res))
    app.put('/order/:id', (req, res) => ordersController.updateOrderStatus(req, res))
}
