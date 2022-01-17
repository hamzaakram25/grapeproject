const mysql = require("mysql");

let mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Node_Project",
  port: 8889,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("DB Connection successfull.");
  else console.log("DB connection failed:" + JSON.stringify(err, undefined, 2));
});

module.exports = mysqlConnection;
