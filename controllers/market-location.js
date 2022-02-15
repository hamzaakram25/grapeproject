const express = require("express");
const Router = express.Router();

const mysqlConnection = require("../connection");

///////////// get all locations

Router.get("/", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM marketlocations",
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

// Insert an marker
Router.post("/", (req, res) => {
  let marker = req.body;
  mysqlConnection.query(
    `INSERT INTO marketlocations (Latitude, Longitude, Name, Image, IconUrl, IconShadow) VALUES ('${marker.Latitude}', '${marker.Longitude}','${marker.Name}','${marker.Image}','${marker.IconUrl}','${marker.IconShadow}')`,
    (err, rows, fields) => {
      if (!err) res.send("Inserted Successfully.");
      else console.log(err);
    }
  );
});

module.exports = Router;
