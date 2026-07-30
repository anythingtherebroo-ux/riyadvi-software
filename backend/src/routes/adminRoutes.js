const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");

const {
  registerAdmin,
  loginAdmin,
  getAdminStats,
} = require("../controllers/adminController");

// Public routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// Protected route
router.get("/stats", adminAuth, getAdminStats);

module.exports = router;