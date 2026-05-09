const express = require("express");
const cors = require("cors");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Home Route
app.get("/", (req, res) => {
    res.send("Backend Server Running Successfully");
});


// Contact GET Route
app.get("/contact", (req, res) => {
    res.send("Contact Route Working");
});


// Contact POST Route
app.post("/contact", (req, res) => {

    console.log("Received Data:", req.body);

    const { name, email, message } = req.body;

    res.status(200).json({
        success: true,
        message: "Form Submitted Successfully",
        data: {
            name,
            email,
            message
        }
    });
});


// Port
const PORT = process.env.PORT || 5000;


// Server Start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});