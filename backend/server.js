require("dotenv").config();

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

const connectDB = require("./src/config/db");

const contactRoutes = require("./src/routes/contactRoutes");
const careerRoutes = require("./src/routes/careerRoutes");
const newsletterRoutes = require("./src/routes/newsletterRoutes");
const blogRoutes = require("./src/routes/blogRoutes");
const portfolioRoutes = require("./src/routes/portfolioRoutes");
const adminRoutes = require("./src/routes/adminRoutes");


console.log("================================");
console.log("USER:", process.env.EMAIL_USER);
console.log(
  "PASS:",
  process.env.EMAIL_PASS ? "Loaded" : "Not Loaded"
);
console.log("================================");


const app = express();


// MongoDB Connection
connectDB();


// Middleware
app.use(cors());

app.use(
  helmet()
);

app.use(
  compression()
);

app.use(
  morgan("dev")
);

app.use(
  express.json()
);

app.use(
  express.urlencoded({
    extended: true
  })
);


// Routes

app.use(
  "/api/contact",
  contactRoutes
);


app.use(
  "/api/careers",
  careerRoutes
);


app.use(
  "/api/newsletter",
  newsletterRoutes
);

app.use
(
  "/api/blogs", 
  blogRoutes
);

app.use(
"/api/portfolio",
portfolioRoutes
);



app.use(
  "/api/admin", 
  adminRoutes
);

// Static Files

app.use(
  "/uploads",
  express.static("uploads")
);



// Test Route

app.get("/", (req, res) => {

  res.status(200).json({

    success: true,

    message:
      "🚀 Riyadvi Backend is Running"

  });

});


// Server

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(
    `🚀 Server running at http://localhost:${PORT}`
  );

});