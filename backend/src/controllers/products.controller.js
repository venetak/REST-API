const Product = require('../models/product')

class ProductsController {
    getAll(req, res) {
        Product.find({}).then((products) => {
            res.json(products)
        }).catch((error) => {
            res.status(400).send()
        })
    }

    getById(req, res) {
        Product.findOne({ _id: req.params.id }).then((product) => {
            res.status(200)
            res.json(product)
        }).catch(() => {
            res.status(400).send()
        })
    }

    updateById(req, res) {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body).then((product) => {
            res.status(200)
            res.redirect(`/product/${product._id}`)
        }).catch(() => {
            res.status(400).send()
        })
    }

    deleteById(req, res) {
        Product.findByIdAndRemove(req.params.id).then(() => {
            res.status(200).send()
        }).catch(() => {
            res.status(400).send()
        })
    }

    createProduct(req, res) {
        new Product(req.body).save().then((product) => {
            res.status(200)
            res.json(product)
        }).catch((error) => {
            res.status(400).send()
        })
    }
}

module.exports = new ProductsController()
