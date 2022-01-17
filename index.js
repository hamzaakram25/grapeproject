const express = require("express");
const app = express();
const mysqlConnection = require("./connection");
const bodyparser = require("body-parser");

app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
/////  for market routes
const markets = require("./controllers/market-controller");
app.use("/markets", markets);

app.listen(3133, () => console.log("Express Server is running on Port 3133."));
