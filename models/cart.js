const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const User = require('../models/user');

const cartSchema = new mongoose.Schema({

     userId: {
     type: ObjectID,
     ref: 'User'
  },

  items: [{
    itemId:{
        type: ObjectID,
        ref: 'Item',
        required: true,
        unique: true
    },
    name: String,
    description: String,
    quantity:{
        type: Number,
        default: 1 ,
        min: 1
    },
   }],

    totalBill:{
        type: Number,
        default: 0
    }
});


module.exports = mongoose.model('Cart' , cartSchema)