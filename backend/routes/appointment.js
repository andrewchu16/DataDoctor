const express = require("express");
const { getAppointments, getAppointmentsByPatient, getAppointmentsByDoctor, getAppointment, updateAppointment } = require("../controllers/appointmentController");

const router = express.Router();

// GET all appointments
router.get("/", getAppointments);

// GET all appointments for a single patient
router.get("/patient/:id", getAppointmentsByPatient);

// GET all appointments for a single doctor
router.get("/doctor/:id", getAppointmentsByDoctor);

// GET a single appointment
router.get("/:id", getAppointment);

// UPDATE a single appointment
router.patch("/:id", updateAppointment);

// POST a new appointment
router.post("/", createAppointment);

module.exports = router;
