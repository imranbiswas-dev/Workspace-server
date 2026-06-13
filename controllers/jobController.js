const Job = require("../models/job");

// === Create Job ===
const createJob = async (req, res) => {
  try {
    const result = await Job.create(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to create job",
      error: error.message,
    });
  }
};

// === Get all job ===
const getJob = async (req, res) => {
  try {
    const result = await Job.find();
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to get job",
      error: error.message,
    });
  }
};

module.exports = {
  createJob,
  getJob,
};
