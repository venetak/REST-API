const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

const Order = mongoose.model('Order', { 
    date: String,
    products: [{
        type: ObjectId
    }], 
    status: String
})


module.exports = Order
