const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PORT
const PORT = process.env.PORT || 5000;

/* ---------------- ROUTES ---------------- */

// Home route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Contact GET route
app.get("/contact", (req, res) => {
  res.send("Contact API working ✅");
});

// Contact POST route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  console.log("Received Data:", req.body);

  return res.status(200).json({
    success: true,
    message: "Data received successfully",
  });
});

/* ---------------- START SERVER ---------------- */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});