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
    const tokenEmail = req.user.email;

    // Double check
    if (tokenEmail !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }

    console.log("Param Email:", email);
    console.log("Token Email:", tokenEmail);

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

// === get all jobs form db for Pagination ===
const allJobsForPagination = async (req, res) => {
  try {
    const size = parseInt(req.query.size);
    const page = parseInt(req.query.page) - 1;
    console.log(size, page);

    const result = await Job.find()
      .skip(page * size)
      .limit(size);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to update job",
      error: error.message,
    });
  }
};

// === Get all job for Count data ===
const allJObsForCount = async (req, res) => {
  try {
    const result = await Job.countDocuments();
    res.json({ count: result });
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
  allJobsForPagination,
  allJObsForCount,
};
