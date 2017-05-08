'use strict';
let router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;
let _ = require('lodash');

let ensureAuthenticated = function (req, res, next) {
    let err;
    if (req.isAuthenticated()) {
        next();
    } else {
        err = new Error('You must be logged in.');
        err.status = 401;
        next(err);
    }
};

router.get('/', ensureAuthenticated, function(req, res, next){

});

router.get('/:id', ensureAuthenticated, function(req, res, next){

});

router.put('/:id', ensureAuthenticated, function(req, res, next){

});

router.post('/', ensureAuthenticated, function(req, res, next){

});
