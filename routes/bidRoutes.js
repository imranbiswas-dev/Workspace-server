const express = require("express");
const {
  createBid,
  myBids,
  bidRequest,
} = require("../controllers/bidController");
const router = express.Router();

// === Create Bid ===
router.post("/", createBid);

// === Get My Bid ===
router.get("/my-bids/:email", myBids);

// === Get Bid Request===
router.get("/bid-requests/:email", bidRequest);

module.exports = router;
