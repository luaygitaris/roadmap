const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    const results = await db.query("SELECT * FROM users WHERE name = ?", [name]);

    await db.end(); // ✅ Ini WAJIB untuk release koneksi di serverless

    if (results.length > 0) {
      const user = results[0];
      res.json({ userId: user.id, message: "Login successful" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Database query failed" });
  }
});

module.exports = router;

