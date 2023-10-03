const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "loginsystem",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

app.get("/api/data", (req, res) => {
  const sql = "SELECT * FROM employe";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log({ result });
    res.json(result);
  });
});

app.post("/api/data", (req, res) => {
  const sql = `INSERT INTO employe (firstName, secondName, email, salray, disc, performance, date) VALUES ('${req.body.firstName}', '${req.body.secondName}', '${req.body.email}', '${req.body.salray}', '${req.body.disc}', '${req.body.performance}', '${req.body.date}')`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.delete("/api/data/:id", (req, res) => {
    const id = req.params.id; 
    const sql = `DELETE FROM employe WHERE idemploye = ?`;
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  });

  app.put("/api/data/:id", (req, res) => {
    const id = req.params.id;
    const updatedUserData = req.body;
    const sql = "UPDATE employe SET ? WHERE idemploye = ?"; 
    
    db.query(sql, [updatedUserData, id], (err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  });
  
  app.get("/api/data/:id", (req, res) => {
    const id = req.params.id; 
    const sql = `SELECT * FROM employe WHERE idemploye = ?`; 
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        throw err;
      }
      console.log({ result });
      res.json(result);
    });
  });
  