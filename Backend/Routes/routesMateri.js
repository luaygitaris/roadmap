const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/:category", (req, res) => {
  const { category } = req.params;
  pool.query(
    "SELECT * FROM materials WHERE category = ?",
    [category],
    (error, results) => {
      if (error) return res.status(500).json({ error: "Database query failed" });
      res.json(results);
    }
  );
});

module.exports = router;
