const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

router.post("/", studentController.createStudent);
router.get("/", studentController.getAllStudents);
router.get("/search", studentController.getStudentsByName); // Query param ?name=...
router.get("/:id", studentController.getStudentById);
router.get("/roll/:rollNumber", studentController.getStudentByRollNumber);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
