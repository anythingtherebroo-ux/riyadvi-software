const Career = require("../models/Career");
const transporter = require("../config/mailer");
const fs = require("fs");
const path = require("path");

// CREATE CAREER APPLICATION

const applyCareer = async (req, res) => {
  try {
    console.log("========== NEW APPLICATION ==========");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required.",
      });
    }

    const normalizedPath = req.file.path.replace(/\\/g, "/");

    const career = new Career({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      department: req.body.department,
      position: req.body.position,
      experience: req.body.experience,
      coverLetter: req.body.coverLetter,
      resume: normalizedPath,
    });

    console.log("Saving to MongoDB...");
    await career.save();
    console.log("MongoDB Save Success");

    // TEMPORARILY DISABLE EMAIL
    /*
    await transporter.sendMail({
      from: `"Riyadvi Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: req.body.email,
      subject: `New Job Application - ${req.body.fullName}`,
      html: `<h2>New Application</h2>`,
    });
    */

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: career,
    });
  } catch (error) {
    console.log("=================================");
    console.log("CAREER ERROR");
    console.log(error);
    console.log(error.stack);
    console.log("=================================");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET APPLICATIONS
const getApplications = async (req, res) => {
  try {
    const applications = await Career.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE APPLICATION
const deleteApplication = async (req, res) => {
  try {
    const application = await Career.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Delete uploaded resume file from disk if it exists
    if (application.resume && fs.existsSync(application.resume)) {
      fs.unlinkSync(application.resume);
    }

    await application.deleteOne();

    res.json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  applyCareer,
  getApplications,
  deleteApplication,
};