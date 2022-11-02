const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

     name:{
        type: String,
        requied: true
    },
     
    description:{
         type: String,
         required: true
    },

    category:{
        type: String,
        required: true

    },

    price:{
        type: Number
        ,
        required: true

    },

});

 
module.exports = mongoose.model('Item' , itemSchema)