var express = require('express');
var jwt = require("jsonwebtoken");
var Router = express.Router();
var User = require('../models/user.models');

Router.post('/login', (req, res) => {
    var { username, password } = req.body;
    User.findOne({ username: req.body.username })
        .then((user) => {
            if (!user) {
                sentAuthError(res);
            }

            var isMatchPass = user.comparePassword(password);
            if (isMatchPass) {
                sentToken(user, res);
            } else {
                sentAuthError(res);
            }

        })
        .catch((err) => {          
            sentServerError(res);
        })
})


Router.post('/register', (req, res) => {
    var { username, email, password } = req.body;
    
    User.create({ username, email, password })
        .then((user) => {
            if (user) {
                sentToken(user, res);
            }
        })
        .catch((err) => {        
            sentServerError(res);
        })

})




function sentServerError(res) {
    res.status(500).json({ success: false, message: "Server Error. Please try again." })

}

function sentAuthError(res) {
    res.json({ success: false, message: "email or password incorrect." })
}

function sentToken(user, res) {
    var token = jwt.sign({_id: user._id}, '123');
    res.json({ success: true, username: user.username, token: token })
}



module.exports = Router;