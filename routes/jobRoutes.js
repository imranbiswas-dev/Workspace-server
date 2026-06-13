const express = require("express");
const { createJob, getJob } = require("../controllers/jobController");
const router = express.Router();

// === Create Job ===
router.post("/", createJob);

// === Get All Job ===
router.get("/", getJob);

module.exports = router;
