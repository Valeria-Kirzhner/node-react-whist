const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        
    },
    quantety: {
        type: Number,
        required: true
    }
});
// here I telling to mongoose how he should recieve the product card, then mongo will call the table as 'product + s'.
const Order = mongoose.model('Order', productSchema);

exports.Product = Product;