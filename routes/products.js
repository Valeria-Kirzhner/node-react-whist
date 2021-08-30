const express = require('express');
const router = express.Router();

// GET all products   // api/products
router.get('/', ( req, res ) => {

     try {
           const products = await Product.find({});
           res.send(products);
           
    } catch ( error ) {

        console.error(error);
        res.status(500).send("Server error");
    }

}); 

// GET a single product by id   // api/products/:id
router.get('/:id', ( req, res ) => {

    try { 
        const product = await Product.findById(req.params.id);
        res.send(product);

    } catch ( error ) {

     console.error(error);
     res.status(500).send("Server error");
    }

}); 

module.exports = router;