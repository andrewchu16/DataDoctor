const express = require("express");
const {
  getDoctors,
  getDoctor,
  updateDoctor,
  createDoctor,
} = require("../controllers/doctorController");

const router = express.Router();

// GET all doctors
router.get("/", getDoctors);

// GET a single doctor
router.get("/:id", getDoctor);

// UPDATE a single doctor
router.patch("/:id", updateDoctor);

// POST a new doctor
router.post("/", createDoctor);

module.exports = router;
