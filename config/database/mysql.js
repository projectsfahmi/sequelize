var Sequelize = require('sequelize');

var db = new Sequelize('fahm3544_db_sample','fahm3544_admin','F4hmi@32!',
    {
        dialect : 'mysql',
        host : 'localhost'
    }
);

module.exports = db;