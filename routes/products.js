const express = require('express');
const router = express.Router();
const { Product } = require("../models/product");
const _ = require("lodash");

// get all products   // api/products
router.get('/', async ( req, res ) => {

     try {
           const products = await Product.find({});
           res.send(products);
           
    } catch ( error ) {

        console.error(error);
        res.status(500).send("Server error");
    }

}); 

// get single product by id   // api/products/:id
router.get('/:id', async ( req, res ) => {

    try { 
        const product = await Product.findById(req.params.id);
        res.send(product);

    } catch ( error ) {

     console.error(error);
     res.status(500).send("Server error");
    }

}); 

// create new product
router.post("/", async (req, res) => {
  
    let product = new Product(

        _.pick(req.body, ["title", "description", "price", "imageUrl"])
        );
  
    post = await product.save();
    res.send(post);
  });

module.exports = router;