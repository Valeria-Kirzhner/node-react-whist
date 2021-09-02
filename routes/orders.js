const express = require('express');
const router = express.Router();
const { Order } = require("../models/order");
const _ = require("lodash");
const mongoose = require('mongoose');

router.post("/", async (req, res) => {

     let order = new Order({
            _id: mongoose.Types.ObjectId(),
            quantity: req.body.quantity,
            products: req.body.productId,
        });      
      order
        .save()
        .then( result => {console.log(result);
        res.status(201).send(result);
        })
        .catch( err => {
            console.log(err);
            res.status(500).send(err);
        });
    
    });


module.exports = router;