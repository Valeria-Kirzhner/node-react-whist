const express = require('express');
const router = express.Router();
const { Order } = require("../models/order");
const _ = require("lodash");
const mongoose = require('mongoose');

router.post("/", async (req, res) => {

         const order = new Order({
          _id: mongoose.Types.ObjectId(),
          orderItems: req.body,
          //itemsPrice: req.body.itemsPrice,
          //totalPrice: req.body.totalPrice,
        });

        try{
        const createdOrder = await order.save();
        res
          .status(201)
          .send({ message: 'New Order Created', order: createdOrder });
        } catch (err){
          console.error(err)
        }
      
    });
    



module.exports = router;