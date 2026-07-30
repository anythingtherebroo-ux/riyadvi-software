const Newsletter = require("../models/Newsletter");
const transporter = require("../config/mailer");

// CREATE NEWSLETTER SUBSCRIBER
const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const exists = await Newsletter.findOne({
      email: email.toLowerCase().trim(),
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "This email address is already subscribed!",
      });
    }

    const subscriber = await Newsletter.create({
      email: email.toLowerCase().trim(),
    });

    // Send Welcome Email if transporter is configured
    try {
      if (process.env.EMAIL_USER) {
        await transporter.sendMail({
          from: `"Riyadvi Insights" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Welcome to Riyadvi Newsletter! 🚀",
          html: `
            <h2>Thank you for subscribing!</h2>
            <p>You'll now receive our weekly technology insights, development guides, and updates directly in your inbox.</p>
            <p>Best regards,<br/><b>Riyadvi Team</b></p>
          `,
        });
      }
    } catch (emailErr) {
      console.error("Welcome Email Sending Error:", emailErr.message);
    }

    res.status(201).json({
      success: true,
      message: "Subscribed successfully!",
      data: subscriber,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL SUBSCRIBERS
const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      data: subscribers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE SUBSCRIBER
const deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Newsletter.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    await subscriber.deleteOne();

    res.json({
      success: true,
      message: "Subscriber deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  subscribeNewsletter,
  getSubscribers,
  deleteSubscriber,
};