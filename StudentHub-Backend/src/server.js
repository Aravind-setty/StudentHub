require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./routes/student.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

// Health check
app.get("/", (req, res) => {
    res.send("Student Hub API is running...");
});

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://AravindSetty:OVSPS4863J@cluster0.uripvaj.mongodb.net/studenthub";

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
