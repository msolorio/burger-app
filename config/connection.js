const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'yourRootPassword',
  database : 'burgers_db'
});

module.exports = connection;
