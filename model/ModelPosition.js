const Sequelize = require('sequelize');
const db = require('../config/database/mysql');

var msposition = db.define('msposition',
{
    PositionCode: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    PositionName: Sequelize.STRING
},{
    freezeTableName : true,
    timestamps : false
});

module.exports = msposition