
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')

const db = process.env.DATABASE_URL;

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log('ERROR'+err);
    }
});

//Get All Users
router.get('/users', function(req,res){
    console.log('Get All Users');
    User.find({})
    .exec(function(err, users){
        if(err){
            console.log('Error getting Users');
        }else{
            res.json(users);
        }
    })
});

//User by ID
router.get('/users/:id', function(req,res){
    console.log('Get User');
    User.findById(req.params.id)
    .exec(function(err, users){
        if(err){
            console.log('No User Found');
        }else{
            res.json(users);
        }
    })
});

//New User
router.post('/users', function(req,res){
    console.log('New User');
    var newUser = new User();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.phoneNumber = req.body.phoneNumber;
    newUser.jobTitle = req.body.jobTitle;
    newUser.location = req.body.location;
    newUser.save(function(err, insertedUser){
        if(err){
            console.log('Error Creating New User');
        }else{
            res.json(insertedUser);
        }
    })

});

//Update User Info
router.put('/users/:id', function(req,res){
    console.log('Updated User');
    User.findByIdAndUpdate(req.params.id, 
        {$set: {firstName:req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                jobTitle: req.body.jobTitle,
                location: req.body.location} 
        },
        {
            new:true
        },
            function(err, updatedUser){
                if(err){
                    res.send('Error Updating User');
                }else{
                    res.json(updatedUser);
                }

            }
        )
});

//Delete User
router.delete('/users/:id', function(req,res){
    console.log('Deleted User');
    User.findByIdAndDelete(req.params.id, function(err, deletedUser){
        if(err){
            console.log("Error Deleting User");
        }else{
            res.json(deletedUser);
        }
    })
})




module.exports = router;
