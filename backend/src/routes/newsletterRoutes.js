const express = require("express");
const router = express.Router();

const {
  subscribeNewsletter,
  getSubscribers,
  deleteSubscriber,
} = require("../controllers/newsletterController");

// CREATE SUBSCRIBER
router.post("/", subscribeNewsletter);

// GET ALL SUBSCRIBERS
router.get("/", getSubscribers);

// DELETE SUBSCRIBER
router.delete("/:id", deleteSubscriber);

module.exports = router;