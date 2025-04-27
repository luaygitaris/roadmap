const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.use("/api/categories", require("./Routes/routesCategory"));
app.use("/api/materials", require("./Routes/routesMateri"));
app.use("/api/login", require("./Routes/routesLogin"));
app.use("/api/progress", require("./Routes/routesProgress"));

app.get('/', (req, res) => {
  res.send('API Working');
});

// Export the Express app for Vercel
module.exports = app;

// Only listen when not in Vercel environment
if (process.env.VERCEL !== '1') {
  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
}