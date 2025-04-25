const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/", (req, res) => {
  const { name } = req.body;

  pool.query("SELECT * FROM users WHERE name = ?", [name], (error, results) => {
    if (error) return res.status(500).json({ error: "Database query failed" });

    if (results.length > 0) {
      const user = results[0];
      res.json({ userId: user.id, message: "Login successful" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  });
});

module.exports = router;
