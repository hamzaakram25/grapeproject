const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

// /// get all markets

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM markets", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

// Get an employee
Router.get("/:id", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM markets WHERE  id= ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

// Delete an employee
Router.delete("/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM markets WHERE id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("Deleted Successfully.");
      else console.log(err);
    }
  );
});

// Insert an employee
Router.post("/", (req, res) => {
  let emp = req.body;
  mysqlConnection.query(
    `INSERT INTO markets (Market_Name, Country, Type, Status) VALUES ('${emp.Market_Name}', '${emp.Country}','${emp.Type}','${emp.Status}')`,
    (err, rows, fields) => {
      if (!err) res.send("Inserted Successfully.");
      else console.log(err);
    }
  );
});

// Update an employee
Router.put("/", (req, res) => {
  let emp = req.body;
  mysqlConnection.query(
    `UPDATE markets SET Market_Name = '${emp.Market_Name}', Country = '${emp.Country}', Type = '${emp.Type}', Status = '${emp.Status}' WHERE id = '${emp.id}'`,
    (err, rows, fields) => {
      if (!err) res.send("Updated Successfully.");
      else console.log(err);
    }
  );
});

module.exports = Router;
