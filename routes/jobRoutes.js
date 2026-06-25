const express = require("express");
const {
  createJob,
  getJob,
  getUserById,
  getJobByEmail,
  deleteJob,
  updateJob,
  allJobsForPagination,
  allJObsForCount,
} = require("../controllers/jobController");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();

// === Create Job ===
router.post("/", createJob);

// === Get All Job ===
router.get("/", getJob);

// === Get Single Job by Id ===
router.get("/id/:id", getUserById);

// === Get Jobs by Email ===
router.get("/email/:email", verifyToken, getJobByEmail);

// === Delete Job ===
router.delete("/:id", deleteJob);

// === Update Job ===
router.put("/:id", updateJob);

// === All Jobs For Pagination ===
router.get("/all-jobs", allJobsForPagination);

// === All Jobs For Count Data ===
router.get("/jobs-count", allJObsForCount);



module.exports = router;
