const express = require("express");
const router = express.Router();
const pool = require("../db"); 

router.post("/", async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ error: "Name and password are required" });
  }

  try {
    const [results] = await pool.execute("SELECT * FROM users WHERE name = ? AND password = ?", [name, password]);

    if (results.length > 0) {
      const user = results[0];
      res.json({ userId: user.id, message: "Login successful" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database query failed" });
  }
});

module.exports = router;
