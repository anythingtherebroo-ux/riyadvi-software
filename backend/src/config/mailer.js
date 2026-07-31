const nodemailer = require("nodemailer");

console.log("================================");
console.log("USER:", JSON.stringify(process.env.EMAIL_USER));
console.log("PASS:", JSON.stringify(process.env.EMAIL_PASS));
console.log(
  "PASS LENGTH:",
  process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : "undefined"
);
console.log("================================");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((err) => {
  if (err) {
    console.error("VERIFY ERROR:");
    console.error(err);
  } else {
    console.log("✅ Gmail Connected");
  }
});

module.exports = transporter;