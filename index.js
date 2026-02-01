require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/posts");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.use("/posts", postRoutes);

const mongoURI = process.env.MONGODB_URI;

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

async function startServer() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Atlas!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err);
});

startServer();
