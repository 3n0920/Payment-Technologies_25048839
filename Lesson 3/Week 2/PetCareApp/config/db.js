const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Qx001128090520',
  database: 'petcare'
});

module.exports = connection;
