'use strict';
let db = require('./_db');
module.exports = db;

// eslint-disable-next-line no-unused-vars
let User = require('./models/user');
let UserBoard = require('./models/userBoard');
let Todo = require('./models/todo');
// if we had more models, we could associate them in this file
// e.g. User.hasMany(Reports)
User.hasOne(UserBoard);
UserBoard.hasMany(Todo);
