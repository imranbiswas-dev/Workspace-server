const express = require("express");
const {
  createJob,
  getJob,
  getUserById,
  getJobByEmail,
  deleteJob,
  updateJob,
} = require("../controllers/jobController");
const router = express.Router();

// === Create Job ===
router.post("/", createJob);

// === Get All Job ===
router.get("/", getJob);

// === Get Single Job by Id ===
router.get("/id/:id", getUserById);

// === Get Jobs by Email ===
router.get("/email/:email", getJobByEmail);

// === Delete Job ===
router.delete("/:id", deleteJob);

// === Update Job ===
router.put("/:id", updateJob);

module.exports = router;
