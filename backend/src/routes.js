const homeController = require('./controllers/home.controller')
const productsController = require('./controllers/products.controller')
const ordersController = require('./controllers/orders.controller')
const userController = require('./controllers/user.controller')
const auth = require('./middlewares/auth')

module.exports = (app) => {
    app.get('/', (req, res) => homeController.home(req, res))


    app.get('/products', (req, res) => productsController.getAll(req, res))

    app.post('/product', auth.isLogged, (req, res) => productsController.createProduct(req, res))

    app.get('/product/:id', (req, res) => productsController.getById(req, res))
    app.delete('/product/:id', auth.isLogged, (req, res) => productsController.deleteById(req, res))
    app.put('/product/:id', auth.isLogged, (req, res) => productsController.updateById(req, res))

    app.get('/orders', auth.isLogged, (req, res) => ordersController.getAll(req, res))
    app.post('/order', auth.isLogged, (req, res) => ordersController.createOrder(req, res))

    app.get('/order/:id', auth.isLogged, (req, res) => ordersController.getOrderById(req, res))
    app.put('/order/:id', auth.isLogged, (req, res) => ordersController.updateOrderStatus(req, res))

    app.post('/login', (req, res) => userController.login(req, res))
    app.post('/logout', (req, res) => userController.logout(req, res))
}
