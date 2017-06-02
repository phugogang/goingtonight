var express = require('express');
var jwt = require('jsonwebtoken');
var Router = express.Router();
var User = require('../models/user.models');


Router.get('/bookmark', checkAuthenticated, (req, res) => { 
    var _id = req.user._id;
    User.findById(_id).populate('bars')
        .then((results) => {           
            res.json(results);
        });
});



function checkAuthenticated (req, res, next) {  
    if (!req.header('Authorization')) {        
        return sentErrorAuthenticated(res);
    }

    var token = req.header('Authorization').split(' ')[1];
    var payload = jwt.decode(token, '123');
    if (!payload) {
         sentErrorAuthenticated(res);
    }

    req.user = payload;
    next();
}

function sentErrorAuthenticated(res) {
    res.json({success: false, messge: 'Unauthorized requested. Missing authentication header.'})
}

function sentErrorMessage(res, message) {
    res.json({success: false, message});
    return;
}

module.exports = Router;