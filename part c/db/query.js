const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "tom123",
  database: "keeper-sitter",
});

async function query(sql, values) {
  const promisePool = pool.promise();
  return promisePool.query(sql, values); // [rows, fields]
}

module.exports = { query };
