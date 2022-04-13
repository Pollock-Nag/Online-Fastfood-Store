const mysql = require('mysql');

//config
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "login_system"
});


module.exports = pool;