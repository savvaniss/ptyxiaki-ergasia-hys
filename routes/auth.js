//routes for authenticating such us login-register
var express = require('express');
var router = express.Router();
//bcrypt library to encrypt password
var bcrypt = require('bcryptjs');
//json token creation for authentication
var jwt = require('jsonwebtoken');

//load user model
var User = require('../models/user');


//post request for a user mean sign up (register a user)
router.post('/signup', function (req, res, next) {
    console.log(req.body.password);
    console.log(req.body.email);
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        //encrypt password with bcrypt library
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        registrationMethod:'site'
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});



module.exports = router;