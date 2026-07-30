const Career = require("../models/Career");
const transporter = require("../config/mailer");
const fs = require("fs");
const path = require("path");

// CREATE CAREER APPLICATION
const applyCareer = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required.",
      });
    }

    // Normalize path for Windows compatibility (convert \ to /)
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

    await career.save();

    // Send email notification
    try {
      await transporter.sendMail({
        from: `"Riyadvi Careers" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: req.body.email,
        subject: `New Job Application - ${req.body.fullName}`,
        html: `
          <h2>New Job Application</h2>
          <p><b>Name:</b> ${req.body.fullName}</p>
          <p><b>Email:</b> ${req.body.email}</p>
          <p><b>Phone:</b> ${req.body.phone}</p>
          <p><b>Position:</b> ${req.body.position}</p>
          <p><b>Experience:</b> ${req.body.experience}</p>
          <p><b>Cover Letter:</b> ${req.body.coverLetter || "N/A"}</p>
        `,
        attachments: [
          {
            filename: req.file.originalname,
            path: req.file.path,
          },
        ],
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Optional: application is saved, but email notification logged error
    }

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: career,
    });
  } catch (error) {
    // Cleanup file if DB save fails
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({
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