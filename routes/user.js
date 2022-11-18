const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')


const User = require('../models/user')



// Signup


router.post('/signup' , async (req,res) => {
   
     try { 
        const { username , email , password} = req.body

// if condition to check if the input fileds are filled. write it afterwards

        const oldUser = await User.findOne({ email }) ; 

        if(oldUser){
            res.status(409).json({
                message:"User already exists. Please login"
            })
        }

      else{
        
           const user = new User({
                username: req.body.username,
                email:req.body.email,
                password: encryptedPassword
            })
             user.save()
             .then(user => {
                res.status(201).json({
                    message: "User has been registered successfully",
                    newUser: user
                })
             })
             .catch(err => console.log(err)) 

        }
    }
 
   catch(err){
    console.log(err)
   }
})


//signin 

router.post('/signin' , async (req,res) => {
    try{
            const { email , password} = req.body
        
             const registeredUser = await User.findOne({email})
     
              console.log(registeredUser)

              if(registeredUser && await bcrypt.compare(req.body.password, registeredUser.password)) {

                const token = jsonwebtoken.sign({registeredUser} , 'aswertyi');
            
               User.token = token;
                res.status(200).json({
                    message: "Login Successfull",
                    UserInfo: registeredUser ,
                    Token : token })
              } 
              else {
                //console.log(err)
                res.status(404).json({message: "Invalid Credentials"})
              }
   
         
            
    }catch(err){
           console.log(err)
           res.status(400).json({
            Error: err
           })
    }















})























router.get('/usersDetails' , (req,res) => {
    User.find()
    .then(result => {
        res.status(201).json({
            count: result.length ,
            Users: result 
        })
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({
            Error: err
        })
    })
})


router.get('/userInfo/:id' , (req,res) => {
    const id = req.params.id;
    User.findById(id)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => console.log(err))
})





module.exports = router;