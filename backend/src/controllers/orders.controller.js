const Order = require('../models/order')

class OrdersController {
    getAll(req, res) {
        Order.find({}).then((orders) => {
            res.status(200)
            res.json(orders)
        }).catch((error) => {
            res.status(400).send(error)
        })
    }

    getOrderById(req, res) {
        Order.find({ _id: req.params.id }).then((order) => {
            res.status(200)
            res.json(order)
        }).catch((error) => {
            res.status(400).send(error)
        })
    }

    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    updateOrderStatus(req, res) {
        Order.findOneAndUpdate({ _id: req.params.id }, { status: req.body.status }).then((order) => {
            res.status(200)
            res.redirect(`/order/${order._id}`)
        }).catch((error) => {
            res.status(400).send(error)
        })
    }

    createOrder(req, res) {
        new Order(req.body).save().then((order) => {
            res.status(200)
            res.json(order)
        }).catch((error) => {
            res.status(400).send(error)
        })
    }
}

module.exports = new OrdersController()