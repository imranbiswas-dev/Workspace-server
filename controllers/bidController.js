const Bid = require("../models/bid");

// === Create Bid ===
const createBid = async (req, res) => {
  try {
    const result = await Bid.create(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to create bid",
      error: error.message,
    });
  }
};

// === Get my bids ===
const myBids = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await Bid.find({ email });
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to get bid",
      error: error.message,
    });
  }
};

// === Get Bid Request ===
const bidRequest = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await Bid.find({
      buyer_email: email,
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to get bid request",
      error: error.message,
    });
  }
};

module.exports = {
  createBid,
  myBids,
  bidRequest,
};
