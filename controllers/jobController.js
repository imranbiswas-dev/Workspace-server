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

// === GEt Single job by ID ===
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Job.findById(id);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to get job",
      error: error.message,
    });
  }
};

// === Get Jobs By Email ===
const getJobByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await Job.find({ "buyer.email": email });
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to get job",
      error: error.message,
    });
  }
};

// === Delete Job ===
const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Job.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to delete job",
      error: error.message,
    });
  }
};

// === Update Job ===
const updateJob = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Job.findByIdAndUpdate(id, req.body, { new: true });
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to update job",
      error: error.message,
    });
  }
};

module.exports = {
  createJob,
  getJob,
  getUserById,
  getJobByEmail,
  deleteJob,
  updateJob,
};
