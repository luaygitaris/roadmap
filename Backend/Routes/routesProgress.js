const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET achievement
// router.get("/:userId/:materialId", async (req, res) => {
//   const { userId, materialId } = req.params;
//   try {
//     const [results] = await pool.query(
//       "SELECT * FROM achievements WHERE user_id = ? AND material_id = ?",
//       [userId, materialId]
//     );

//     if (results.length > 0) {
//       res.json({ status: "learned" });
//     } else {
//       res.json({ status: "not learned" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Database query failed" });
//   }
// });

router.get("/:userId/:materialId", async (req, res) => {
  const { userId, materialId } = req.params;
  console.log("UserId:", userId, "MaterialId:", materialId); // Log untuk memastikan ID yang diterima
  try {
    const [results] = await pool.query(
      "SELECT progress FROM achievements WHERE user_id = ? AND material_id = ?",
      [userId, materialId]
    );

    if (results.length > 0) {
      res.json({ progress: results[0].progress });
    } else {
      res.json({ progress: "not learned" });
    }
  } catch (error) {
    console.error("Database Error:", error); // Log error database
    res.status(500).json({ error: "Database query failed" });
  }
});



// POST achievement
// router.post("/", async (req, res) => {
//   const { userId, materialId } = req.body;
//   try {
//     await pool.query(
//       "INSERT INTO achievements (user_id, material_id) VALUES (?, ?)",
//       [userId, materialId]
//     );
//     res.json({ message: "Progress saved!" });
//   } catch (error) {
//     res.status(500).json({ error: "Database query failed" });
//   }
// });

// Insert or update progress
router.post("/", async (req, res) => {
  const { userId, materialId, progress } = req.body;
  try {
    const [existing] = await pool.query(
      "SELECT * FROM achievements WHERE user_id = ? AND material_id = ?",
      [userId, materialId]
    );

    if (existing.length > 0) {
      await pool.query(
        "UPDATE achievements SET progress = ? WHERE user_id = ? AND material_id = ?",
        [progress, userId, materialId]
      );
    } else {
      await pool.query(
        "INSERT INTO achievements (user_id, material_id, progress) VALUES (?, ?, ?)",
        [userId, materialId, progress]
      );
    }

    res.json({ message: "Progress updated!" });
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
});


module.exports = router;
