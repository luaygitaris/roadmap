const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", (req, res) => {
  pool.query("SELECT DISTINCT category FROM materials", (error, results) => {
    if (error) return res.status(500).json({ error: "Database query failed" });
    res.json(results);
  });
});

module.exports = router;
