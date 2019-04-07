const Controller = require('./controller')
const Product = require('../models/product')

class ProductsController extends Controller {
    getAll(req, res) {
        Product.find({})
            .then((products) => this.sendResSuccess(res, products))
            .catch((error) => this.sendResError(res, error))
    }

    getById(req, res) {
        Product.findOne(this.getIdQuery(req))
            .then((product) => {
                if (!product) return this.sendNotFound(res)
                this.sendResSuccess(res, product)

            })
            .catch((error) => this.sendResError(res, error))
    }

    updateById(req, res) {
        Product.findOneAndUpdate(this.getIdQuery(req), req.body)
            .then((product) => {
                if (!product) return this.sendNotFound(res)
                this.redirect(res, `/product/${product._id}`)
            }).catch((error) => this.sendResError(res, error))
    }

    deleteById(req, res) {
        Product.findByIdAndRemove(req.params.id)
            .then(() => this.sendResSuccess(res))
            .catch((error) => this.sendResError(res, error))
    }

    createProduct(req, res) {
        new Product(req.body).save()
            .then((product) => this.sendResSuccess(res, product))
            .catch((error) => this.sendResError(res, error))
    }
}

module.exports = new ProductsController()
