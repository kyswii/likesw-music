const mysql = require("mysql");
const dbinfo = require("./dbinfo");

const pool = mysql.createPool(dbinfo);
console.log('pool..........');
module.exports = pool;