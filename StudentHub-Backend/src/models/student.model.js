const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    rollNumber: {
        type: String,
        required: [true, "Roll number is required"],
        unique: true,
        trim: true
    },
    department: {
        type: String,
        required: [true, "Department is required"],
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Student", studentSchema);
