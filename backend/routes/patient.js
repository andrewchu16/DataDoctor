const express = require("express");
const {
  getPatients,
  getPatient,
  updatePatient,
  createPatient,
} = require("../controllers/patient");

const router = express.Router();

// GET all patients
router.get("/", getPatients);

// GET a single patient
router.get("/:id", getPatient);

// UPDATE a single patient
router.patch("/:id", updatePatient);

// POST a new patient
router.post("/", createPatient);

module.exports = router;
