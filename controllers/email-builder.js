const express = require("express");
const Router = express.Router();

const mysqlConnection = require("../connection");

// /// get email builder component for specific market

Router.get("/", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM emailbuilders WHERE  id= ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

// Delete email builder component for specific market
Router.delete("/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM emailbuilders WHERE id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("Deleted Successfully.");
      else console.log(err);
    }
  );
});

// Insert email builder component for specific market
Router.post("/", (req, res) => {
  let emp = req.body;
  mysqlConnection.query(
    `INSERT INTO emailbuilder (Market_id, Builder_data) VALUES ('${emp.id}', '${emp.builder_data}')`,
    (err, rows, fields) => {
      if (!err) res.send("Inserted Successfully.");
      else console.log(err);
    }
  );
});

// Update email builder component for specific market
Router.put("/", (req, res) => {
  let emp = req.body;
  mysqlConnection.query(
    `UPDATE markets SET  Builder_data = '${emp.builder_data}' WHERE id = '${emp.id}'`,
    (err, rows, fields) => {
      if (!err) res.send("Updated Successfully.");
      else console.log(err);
    }
  );
});

module.exports = Router;
