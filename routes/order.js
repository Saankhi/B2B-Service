const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Order = require('../models/order')



router.post('/addOrder' , async (req,res) => {
    
    const order = new Order(req.body)
    try{
     const docs = await order.save()

     res.status(201).json({
        message: 'Order created',
        docs})

    }catch(err){
        console.log(err)
        res.status(404).json({Error:err})

    }
})

router.get('/myOrders' , async (req,res) => {

    try{
      const orderDetails = await Order.find()

      res.status(201).json({
        count: orderDetails.length ,
        messsage: 'All Order Details' ,
        MyOrders : orderDetails
      })
       
        
    }catch(err){
          console.log(err)
          res.status(400).json({
            Error: err
          })
    }

})

router.get('/:_id' , (req,res) => {
    const orderId = req.params._id;
    Order.findById(orderId)
    .then(result => {
        res.status(201).json({
            orderType: 'Individual order :' ,
            myOrder: result
        })
    })
    .catch(error => {
        console.log(error)
        res.status(400).json({Error:error})
    })

 })


  router.delete('/:_id' , (req,res) => {
    const orderId = req.params._id;
    Order.deleteOne({_id: orderId})
    .then(result => {
        res.status(201).json({
           result, message: 'Order has been cancelled'

        })
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({Error: err})
    })
  })







module.exports = router;