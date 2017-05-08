'use strict';

let _ = require('lodash');
let Sequelize = require('sequelize');

let db = require('../_db');

module.exports = db.define('userBoard', {
    status: {
        type: Sequelize.ENUM('war', 'peace')
    },
    title: {
        type: Sequelize.STRING
    }
}, {

});

