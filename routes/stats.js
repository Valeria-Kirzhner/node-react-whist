const express = require('express');
const router = express.Router();
const { Order } = require("../models/order");
const _ = require("lodash");
const mongoose = require('mongoose');

// get top-5-most-selling-products 

router.get('/top-products', async ( req, res ) => {
  try {
    newData = []

      const topProduct = await Order.aggregate([
      {
        $unwind: '$orderItems'
      },
        {   $group: {
                    _id : "$orderItems._id" , 
                     total: {$sum: "$orderItems.qty"},  // count the quantities
                     title: { $first: "$orderItems.title"},
                     count: { $sum: 1 }// count the number of the orders
                    }
                  },
                    { $limit : 5 }
                   ]).sort({total :-1});

        const topOrder = await Order.aggregate([
          { '$match': { 'date': { '$gte': new Date((new Date().getTime() - (5 * 24 * 60 * 60 * 1000))) }  } } ,
          {  $project: { date: { $dateToString: { format: "%d-%m-%Y", date: "$date"  }}, totalSum: 1}}
                 
          ]).sort({ "date": -1 })



        newData = [topProduct, topOrder];
        res.send(newData);
       
 } catch ( error ) {
     console.error(error);
     res.status(500).send("Server error");
 }
}); 
//
router.get('/last-orders', async ( req, res ) => {
  try {

      const test = await Order.find(
        {
            "date": 
            {
                $gte: new Date((new Date().getTime() - (5 * 24 * 60 * 60 * 1000)))
            },
            
        },
        ).sort({ "date": -1 })

        res.send(test);
       
 } catch ( error ) {
     console.error(error);
     res.status(500).send("Server error");
 }
}); 




module.exports = router;