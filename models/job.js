const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    job_title: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Web Development", "Graphic Design", "Digital Marketing"],
    },
    min_price: {
      type: Number,
      required: true,
    },
    max_price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    job_image: {
      type: String,
    },
    buyer: {
      email: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
      },
    },
  },
  { timestamps: true },
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
