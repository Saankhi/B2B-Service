const { error } = require('console');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const item = require('../models/item');
 
const Item = require('../models/item');


router.post('/itemPost' , (req,res) => {
    const Itemproduct = new Item({
       _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price
    })

    Itemproduct.save()
    .then(result => {
        res.status(201).json({
            message: 'Item Created' ,
            createdItem: Itemproduct
        })
    })
    .catch(error => {
        console.log(error)
        res.status(400).json({Error:error
        })
    })
})


router.get('/itemsFetch' , (req,res) => {
         Item.find()
         .then(result => {
            res.status(201).json({
                count: result.length,
                items: result

            })
         })
         .catch(error => {
            console.log(error)
            res.status(400).json({Error:error})
         })
})


 router.get('/:_id' , (req,res) => {
    const itemId = req.params._id;
    Item.findById(itemId)
    .then(result => {
        res.status(201).json({
            itemType: 'Individual item :' ,
            item: result
        })
    })
    .catch(error => {
        console.log(error)
        res.status(400).json({Error:error})
    })

 })

  router.patch('/:_id' , (req,res) => {
    const itemId = req.params._id;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
     Item.updateOne({_id: itemId} , { $set: updateOps})
     .then(result => {
        res.status(201).json({
            message: 'Product has been updated' ,
            updatedItem : result
        })
     })
     .catch(error => {
        console.log(error)
        res.status(400).json({Error: error})
     }) ;

  })

  router.delete('/:_id' , (req , res) => {
     const itemId = req.params._id;
     Item.deleteOne({_id: itemId})
     .then(result => {
        res.status(201).json({
            result , message: "Product has deleted" 

        })
     })
     .catch(error=> {
        res.status.apply(400).json({Error:error})
     })
  })

module.exports = router;