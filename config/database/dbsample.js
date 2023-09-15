var mysql = require('mysql');

var con = mysql.createConnection(
    {
        host : "localhost",
        user : "fahm3544_admin",
        password : "F4hmi@32!",
        database : "fahm3544_db_sample"
    }
)

con.connect(function(err){
    if (err) throw err;
    console.log("Koneksi Berhasil");
})

module.exports = con;