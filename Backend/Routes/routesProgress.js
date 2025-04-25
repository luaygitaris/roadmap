const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/:userId/:materialId", (req, res) => {
  const { userId, materialId } = req.params;
  pool.query(
    "SELECT * FROM achievements WHERE user_id = ? AND material_id = ?",
    [userId, materialId],
    (error, results) => {
      if (error) return res.status(500).json({ error: "Database query failed" });

      if (results.length > 0) {
        res.json({ status: "learned" });
      } else {
        res.json({ status: "not learned" });
      }
    }
  );
});

router.post("/", (req, res) => {
  const { userId, materialId } = req.body;
  pool.query(
    "INSERT INTO achievements (user_id, material_id) VALUES (?, ?)",
    [userId, materialId],
    (error, results) => {
      if (error) return res.status(500).json({ error: "Database query failed" });

      res.json({ message: "Progress saved!" });
    }
  );
});

module.exports = router;
