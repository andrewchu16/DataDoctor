const Appointment = require("../models/appointmentData");
const mongoose = require("mongoose");

// Get all appointments
const getAppointments = async (req, res) => {
  const appointments = await Appointment.find({}).sort({ createdAt: -1 });

  res.status(200).json(appointments);
};

// Get all appointments for a single patient
const getAppointmentsByPatient = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No patient with that id");
  }

  const appointments = await Appointment.find({ patientId: id });

  res.status(200).json(appointments);
};

// Get all appointments for a single doctor
const getAppointmentsByDoctor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No doctor with that id");
  }

  const appointments = await Appointment.find({ doctorId: id });

  res.status(200).json(appointments);
};

// Get a single appointment
const getAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No appointment with that id");
  }

  appointment = await Appointment.findById(id);

  res.status(200).json(appointment);
};

// Update a single appointment
const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const {
    startTime,
    endTime,
    audioData,
    name,
    place,
    summary,
    transcript,
    status,
    patientId,
    doctorId,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No appointment with that id");
  }

  const updatedAppointment = {
    startTime,
    endTime,
    audioData,
    name,
    place,
    summary,
    transcript,
    status,
    patientId,
    doctorId,
    _id: id,
  };

  await Appointment.findByIdAndUpdate(id, updatedAppointment, { new: true });

  res.status(200).json(updatedAppointment);
};

// Create a new appointment
const createAppointment = async (req, res) => {
  const {
    startTime,
    endTime,
    audioData,
    name,
    place,
    summary,
    transcript,
    status,
    patientId,
    doctorId,
  } = req.body;

  const newAppointment = new Appointment({
    startTime,
    endTime,
    audioData,
    name,
    place,
    summary,
    transcript,
    status,
    patientId,
    doctorId,
  });

  try {
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getAppointments,
  getAppointmentsByPatient,
  getAppointmentsByDoctor,
  getAppointment,
  updateAppointment,
  createAppointment,
};
