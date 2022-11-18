const express =require('express')
const router = express.Router()
const mongoose = require('mongoose')


const Cart = require('../models/cart')
const User = require('../models/user')


router.get('/cartItems' , (req,res) => {
     Cart.find()
     .then(result => {
        res.status(201).json({
            count: result.length,
            message: "List of all items:" ,
            ListOfItems: result

        })
     })
     .catch(err => {
        console.log(err)
        res.status(400).json({
              Error: err
        })
     })
})

router.post('/addtocart' , async (req,res) => {
   
    const oldUser = await User.findOne({email})
  if(!oldUser){

  }else{
    
  }





})

router.patch('/' , (req,res) => {

})

router.delete('/' , (req,res) => {

})







exports.module = router;