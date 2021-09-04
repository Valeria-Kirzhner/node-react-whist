const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    orderItems: [{
        
        title: { type: String, required: true },
        qty: { type: Number, required: true },
        imageUrl: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }
            
    }],

    date: { type: Date, default: Date.now },

});








// here I telling to mongoose how he should recieve the order, then mongo will call the table as 'order + s'.
const Order = mongoose.model('Order', orderSchema);

exports.Order = Order;