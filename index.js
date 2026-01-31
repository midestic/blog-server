const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
