const Admin = require("../models/Admin");
const Contact = require("../models/Contact");
const Career = require("../models/Career");
const Newsletter = require("../models/Newsletter");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER ADMIN
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required.",
      });
    }

    const exists = await Admin.findOne({ email: email.toLowerCase().trim() });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Admin with this email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Admin account created successfully.",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// LOGIN ADMIN
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const admin = await Admin.findOne({ email: email.toLowerCase().trim() });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin account not found.",
      });
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid password.",
      });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET || "fallback_secret_key",
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ADMIN DASHBOARD STATS
const getAdminStats = async (req, res) => {
  try {
    const contacts = await Contact.countDocuments();
    const applications = await Career.countDocuments();
    const subscribers = await Newsletter.countDocuments();

    res.json({
      success: true,
      data: {
        contacts,
        applications,
        subscribers,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAdminStats,
};