require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");

const app = express();
const port = process.env.PORT || 5000;

const jobRoutes = require("./routes/jobRoutes");
const bidRoutes = require("./routes/bidRoutes");

// === Global Middleware ===
app.use(cors());
app.use(express.json());

// === Database Connection ===
connectDB();

// === Default Route ===
app.get("/", (req, res) => {
  res.send("Workspace server is running");
});

// === Routes ===
app.use("/jobs", jobRoutes);
app.use("/bids", bidRoutes);

// === Server ===
app.listen(port, () => {
  console.log(`Workspace server is running on port ${port}`);
});
