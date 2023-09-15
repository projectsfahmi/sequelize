const Sequelize = require('sequelize');
const db = require('../config/database/dbsampleseq');

var mspasien = db.define('mspasien',
{
    
    BRANCH : Sequelize.STRING,
    MR_NO: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    IDCARD : Sequelize.STRING,
    NM_PASIEN : Sequelize.STRING,
    DOB : Sequelize.STRING,
    GENDER : Sequelize.STRING,
    TEMPAT_LAHIR : Sequelize.STRING,
    ALAMAT_PASIEN : Sequelize.STRING,
    TELP_PASIEN : Sequelize.STRING,
    HP_PASIEN : Sequelize.STRING,
    KOTA : Sequelize.STRING,
    USERCREATED : Sequelize.STRING
},{
    freezeTableName : true,
    timestamps : false
});

// mspasien.removeAtrribute('id');
module.exports = mspasien;