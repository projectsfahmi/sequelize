const Sequelize = require('sequelize');
const db = require('../config/database/mysql');
const msposition = require('./ModelPosition');

var msemployee = db.define('msemployee',
{
    
    EmployeeCode: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    EmployeeName : Sequelize.STRING,
    TempatLahir : Sequelize.STRING,
    MaritalStatus : Sequelize.STRING,
    PositionCode : Sequelize.STRING,
    PositionName : Sequelize.STRING,
    Photo : Sequelize.STRING
},{
    freezeTableName : true,
    timestamps : false
});

msemployee.hasOne(msposition, {foreignKey: 'PositionCode'});
msemployee.belongsTo(msposition, {foreignKey: 'PositionCode'});

module.exports = msemployee;