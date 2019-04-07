const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    STATUSES = ['Processing', 'Delivered', 'Cancelled', 'Pending']

const Order = mongoose.model('Order', { 
    date: {
        type: String,
        default: Date.now,
        required: true
    },
    products: [{
        type: ObjectId,
        required: true
    }], 
    status: {
        type: String,
        enum: STATUSES
    }
})

module.exports = Order
