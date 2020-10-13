const connection = require("../config/connection_database");

exports.getUser = async (req, res) => {
  connection.query("select * from users", (error, result, fields) => {
    if (error) {
      console.log(error);
    } else {
      res.json(result);
    }
    connection.end();
  });
};

exports.addUser = async (req, res) => {
  connection.query(
    `insert into users (user_id,user_name) values ('${req.body.user_id}','${req.body.user_name}')`,
    (error, result, fields) => {
      if (error) {
        console.log(error);
      } else {
        res.json(result);
      }
      connection.end();
    }
  );
};
