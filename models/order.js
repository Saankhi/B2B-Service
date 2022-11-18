const { ObjectID } = require('bson')
const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    itemId: {
        type: ObjectID,
        ref: 'Item' ,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default :1
    },
    status: {
        type: String,
        default: 'Order Placed'
    }

})


module.exports = mongoose.model('Order' , orderSchema)