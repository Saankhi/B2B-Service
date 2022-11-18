const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const itemRoute = require('./routes/item')
const userRoute = require('./routes/user')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')


mongoose.connect('mongodb+srv://SaankhyaKatari:SaankhyaKatari27@mongodb-practice.xhgwvkd.mongodb.net/test?retryWrites=true&w=majority')

app.use(bodyParser.urlencoded({extended: true})); // true allows it to parse rich data , false allows you to parse simple data
app.use(bodyParser.json());



app.use('/item' , itemRoute)
//app.use('/cart' , cartRoute)
app.use('/user' , userRoute )
app.use('/order', orderRoute)


























module.exports = app;