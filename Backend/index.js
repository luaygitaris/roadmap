const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/categories", require("./Routes/routesCategory"));
app.use("/api/materials", require("./Routes/routesMateri"));
app.use("/api/login", require("./Routes/routesLogin"));
app.use("/api/progress", require("./Routes/routesProgress"));

app.get('/', (req, res) => {
  res.send('API Working');
});


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
