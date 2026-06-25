const express = require("express");
const {
  generateToken,
  handleLogout,
} = require("../controllers/authController");
const router = express.Router();

// === generate token ===
router.post("/jwt", generateToken);
router.get("/logout", handleLogout);

module.exports = router;
