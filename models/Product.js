const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

      title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
      },
    description: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1024,
      },
      price: {
          type: Number,
          required: true
      },
      imageUrl: {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 1024,
      }
});
// here I telling to mongoose how he should recieve the product card, then mongo will call the table as 'product + s'.
const Product = mongoose.model('Product', productSchema);

exports.Product = Product;