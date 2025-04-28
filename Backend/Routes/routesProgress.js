const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET achievement
router.get("/:userId/:materialId", async (req, res) => {
  const { userId, materialId } = req.params;
  try {
    const [results] = await pool.query(
      "SELECT * FROM achievements WHERE user_id = ? AND material_id = ?",
      [userId, materialId]
    );

    if (results.length > 0) {
      res.json({ status: "learned" });
    } else {
      res.json({ status: "not learned" });
    }
  } catch (error) {
    res.status(500).json({ error: "Database query failed" });
  }
});

// POST achievement
router.post("/", async (req, res) => {
  const { userId, materialId } = req.body;
  try {
    await pool.query(
      "INSERT INTO achievements (user_id, material_id) VALUES (?, ?)",
      [userId, materialId]
    );
    res.json({ message: "Progress saved!" });
  } catch (error) {
    res.status(500).json({ error: "Database query failed" });
  }
});

module.exports = router;
