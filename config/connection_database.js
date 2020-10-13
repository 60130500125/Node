const mySql = require("mysql");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  database: "node",
});
module.exports = connection;
