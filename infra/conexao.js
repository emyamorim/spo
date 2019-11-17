var mysql = require('mysql');

function conectar() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'spo',
    multipleStatements: 'true'
  });
}

module.exports = function() {
  return conectar;
};
