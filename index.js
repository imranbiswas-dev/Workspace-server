require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");

const app = express();
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000;

const jobRoutes = require("./routes/jobRoutes");
const bidRoutes = require("./routes/bidRoutes");
const authRoutes = require("./routes/authRoutes");

// === Global Middleware ===
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    optionSuccessStatus: 200,
  }),
);
app.use(express.json());
app.use(cookieParser());

// === Database Connection ===
connectDB();

// === Default Route ===
app.get("/", (req, res) => {
  res.send("Workspace server is running");
});

// === Routes ===
app.use("/jobs", jobRoutes);
app.use("/bids", bidRoutes);
app.use("/", authRoutes);

// === Server ===
app.listen(port, () => {
  console.log(`Workspace server is running on port ${port}`);
});
