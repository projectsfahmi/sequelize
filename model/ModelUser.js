const Sequelize = require('sequelize');
const db = require('../config/database/dbapi');

var msposition = db.define('users',
{
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING
},{
    freezeTableName : true,
    timestamps : false
});

module.exports = msposition