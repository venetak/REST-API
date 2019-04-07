const Controller = require('./controller')
const Order = require('../models/order')

class OrdersController extends Controller {

    getAll(req, res) {
        Order.find({})
            .populate('products')
            .exec()
            .then((order) => this.sendResSuccess(res, order))
            .catch((error) => this.sendResError(res, error))
    }

    getOrderById(req, res) {
        Order.find(this.getIdQuery(req))
            .populate('products')
            .exec()
            .then((order) => {
                if (!order) return this.sendNotFound(res)

                this.sendResSuccess(res, order)
            })
            .catch((error) => this.sendResError(res, error))
    }

    /**
     * 
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

    createOrder(req, res) {
        new Order(req.body).save()
            .then((order) => this.sendResSuccess(res, order))
            .catch((error) => this.sendResError(res, error))
    }
}

module.exports = new OrdersController()