const Contact = require("../models/Contact");
const transporter = require("../config/mailer");

// CREATE CONTACT
const createContact = async (req, res) => {
  try {
    const { name, email, phone, company, service, budget, timeline, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, Email, and Message are required fields.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      message,
    });

    // Send email notification to Admin
    try {
      if (process.env.EMAIL_USER) {
        await transporter.sendMail({
          from: `"Riyadvi Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          replyTo: email,
          subject: `New Contact Inquiry - ${name}`,
          html: `
            <h2>New Project Inquiry</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone || "N/A"}</p>
            <p><b>Company:</b> ${company || "N/A"}</p>
            <p><b>Service:</b> ${service || "N/A"}</p>
            <p><b>Budget:</b> ${budget || "N/A"}</p>
            <p><b>Timeline:</b> ${timeline || "N/A"}</p>
            <p><b>Message:</b></p>
            <p>${message}</p>
          `,
        });
      }
    } catch (emailErr) {
      console.error("Contact Email Notification Error:", emailErr.message);
    }

    res.status(201).json({
      success: true,
      message: "Contact inquiry submitted successfully!",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET CONTACTS
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE CONTACT
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    await contact.deleteOne();

    res.json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact,
};