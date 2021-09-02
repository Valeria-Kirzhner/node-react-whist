const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});
// here I telling to mongoose how he should recieve the order, then mongo will call the table as 'order + s'.
const Order = mongoose.model('Order', orderSchema);

exports.Order = Order;