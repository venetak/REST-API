const Controller = require('./controller')
const Order = require('../models/order')

class OrdersController extends Controller {

    /**
     * Gets all orders from the database
     * @param {Request} req
     * @param {Response} res
     */
    getAll(req, res) {
        Order.find({})
            .populate('products')
            .exec()
            .then((order) => this.sendResSuccess(res, order))
            .catch((error) => this.sendResError(res, error))
    }

    /**
     * Gets a specific order by id
     * @param {Request} req
     * @param {Response} res
     */
    getOrderById(req, res) {
        Order.find(this.getIdQuery(req))
            .populate('products') //show the actual product, instead of its id
            .exec()
            .then((order) => {
                if (!order) return this.sendNotFound(res)

                this.sendResSuccess(res, order)
            })
            .catch((error) => this.sendResError(res, error))
    }

    /**
     * Updates an order by id
     * @param {Request} req 
     * @param {Response} res 
     */
    updateOrderStatus(req, res) {
        Order.findOneAndUpdate(this.getIdQuery(req), { status: req.body.status })
            .then((order) => {
                if (!order) return this.sendNotFound(res)

                this.redirect(res, `/order/${order._id}`)
            }).catch((error) => this.sendResError(res, error))
    }

    /**
     * Creates a new order
     * @param {Request} req
     * @param {Response} res
     */
    createOrder(req, res) {
        new Order(req.body).save()
            .then((order) => this.sendResSuccess(res, order))
            .catch((error) => this.sendResError(res, error))
    }
}

module.exports = new OrdersController()
