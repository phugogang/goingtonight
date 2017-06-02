var express = require('express');
var Router = express.Router();
var Yelp = require('yelpv3');
var jwt = require('jsonwebtoken');
var Bars = require('../models/bars.models');
var User = require('../models/user.models');

var yelp = new Yelp({
    app_id: 'fDy-sVdAk8oBmezpCQgmYg',
    app_secret: 'Iv9L9dOwhvGU0FZLUtGB48y03klOf86YZsDto04aJagp0Sf17DSO3LYwDGLYOLzq'
});

Router.post('/search-bars', (req, res) => {
    yelp.search({ term: 'bars', location: req.body.location, limit: 20 })
        .then(function (data) {

            let result = JSON.parse(data);
            if (result.error) {
                return false;
            }

            return res.json(result.businesses);
        })
        .catch((err) => {

        })

});

Router.post('/search-reviews', (req, res) => {
    yelp.reviews(req.body.bar_id)
        .then(function (data) {
            let datas = JSON.parse(data);
            // console.log(datas);
            res.json(datas.reviews);
        })
        .catch(function (err) {
            sentErrorMessage(res, "Search not Found. Try another keywords to search again")
        });
});


Router.post('/bookmark-bars', checkAuthenticated, (req, res) => {   
    User.findById(req.user._id)
        .then((user) => {
            console.log(req.body.image_url);
            var bar = new Bars();
            bar.name = req.body.name;
            bar.image_url = req.body.image_url || '';
            bar.photos = req.body.photos;
            bar.rating = req.body.rating;
            bar.phone = req.body.phone;
            bar.reviews = req.body.reviews;
            bar.address = req.body.address;
            // if (req.body.reviews) {
            //     for (let review of req.body.reviews) {
            //         bar.reviews.push(review);
            //     }
            // }

            bar.save()
                .then((new_bar) => {
                    user.bars.push(new_bar);
                    user.save()
                        .then((use) => {                                                     
                            sentSuccessMessage(res, "Success bookmared.");
                        })
                })
                .catch(() => {
                    sentErrorMessage(res, "Bookmark Error");
                })
                ;
        })
        .catch(() => {
            sentErrorMessage(res, "Username not Valid.");
        })
})


Router.delete('/bookmarks/:id', checkAuthenticated, (req, res) => {
    var bookmark_id = req.params.id;
    console.log(bookmark_id);
    Bars.findByIdAndRemove(bookmark_id)
        .then((results) => {
                console.log(results);
            sentSuccessMessage(res, "Success Delete bookmark")
        })
        .catch((err) => {
            sentErrorMessage(res, "Something wrong. Delete bookmark Error.!")
        })
})





function checkAuthenticated(req, res, next) {
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
    res.json({ success: false, messge: 'Unauthorized requested. Missing authentication header.' })
}

function sentErrorMessage(res, message) {
    res.json({ success: false, message });
    return;
}

function sentSuccessMessage(res, message) {
    res.json({ success: true, message })
    return;
}


module.exports = Router;