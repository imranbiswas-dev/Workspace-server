const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    job_title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    buyer_email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed", "Rejected"],
      default: "Pending",
    },
    deadline: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const Bid = mongoose.model("Bid", bidSchema);
module.exports = Bid;
