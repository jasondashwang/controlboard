'use strict';

let _ = require('lodash');
let Sequelize = require('sequelize');

let db = require('../_db');

module.exports = db.define('todo', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      defaultValue: ''
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
}, {

});

