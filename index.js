const express = require("express");
const cors = require("cors");
const mysql = require("mysql"); // Use mysql, not mssql
const bodyParser = require("body-parser");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Halloween",
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Server Error: " + err.message);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { name, email, phone, message } = req.body;

  // SQL query
  const sql =
    "INSERT INTO ContactUs (name, email, phone, message) VALUES (?, ?, ?, ?)";

  // Execute query
  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).send("Error saving data.");
    }
    res.send("✅ Data Inserted Successfully!");
  });
});

// Start server
app.listen(8081, () => {
  console.log("🚀 Server running at http://localhost:8081");
});
