const express = require("express");
const bodyParser = require("body-parser");
const mySql = require("mysql");
const connection = require("./config/connection_database");
const user_route = require("./routes/users_route");

const app = express();
app.use(bodyParser.json());

connection.connect();

app.use("/user", user_route);

app.listen(3000, () => {
  console.log("BE at port 3000");
});
