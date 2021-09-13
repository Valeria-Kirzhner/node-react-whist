const express = require('express');
const router = express.Router();
const { Product } = require("../models/product");
const _ = require("lodash");

// get all products  
router.get('/', async ( req, res ) => {

     try {
           const products = await Product.find({});
           res.send(products);
           
    } catch ( error ) {

        console.error(error);
        res.status(500).send("Server error");
    }

}); 

// get single product by id   
router.get('/:id', async ( req, res ) => {

    try { 
        const product = await Product.findById(req.params.id);
        res.send(product);

    } catch ( error ) {

     console.error(error);
     res.status(500).send("Server error");
    }

}); 
// delete product
router.delete("/:id", async (req, res) => {
  try {
  const product = await Product.findOneAndRemove({
    _id: req.params.id,
  });
  if (!product)
    return res.status(404).send("The product with the given ID was not found.");
  res.send(product);
} catch (error) {
  console.error(error);
  res.status(500).send("Server error");
}
});

//edit product
router.put("/:id", async (req, res) => {

    try {
        let product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!product)
      return res.status(404).send("The product with the given id was not found.");
  
    product = await Product.findOne({ _id: req.params.id });
    res.send(product);
    } catch (error) {
      console.error(error);
    res.status(500).send("Server error");
    }
  });

// create new product
router.post("/", async (req, res) => {
  
  try {
      let product = new Product(

        _.pick(req.body, ["title", "description", "price", "imageUrl"])
        );
  
    post = await product.save();
    res.send(post);
    
  } catch (error) {

    console.error(error);
    res.status(500).send("Server error");
  }
  
  });

module.exports = router;