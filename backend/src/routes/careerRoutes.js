const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  applyCareer,
  getApplications,
  deleteApplication,
} = require("../controllers/careerController");

// Helper middleware for Multer error handling
const handleUpload = (req, res, next) => {
  upload.single("resume")(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
    next();
  });
};

router.post("/", handleUpload, applyCareer);
router.get("/", getApplications);
router.delete("/:id", deleteApplication);

module.exports = router;