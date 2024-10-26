const Patient = require("../models/patientData");
const mongoose = require("mongoose");

// Get all patients
const getPatients = async (req, res) => {
  const patients = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(patients);
};

const getPatient = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No patient with that id");
  }

  const patient = await Patient().findById(id);

  res.status(200).json(patient);
}

const updatePatient = async (req, res) => {
  const { id } = req.params;
  const { email, name, pfp, appointments } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No patient with that id");
  }

  const updatedPatient = { email, name, pfp, appointments, _id: id };

  await Patient.findByIdAndUpdate(id, updatedPatient, { new: true });

  res.status(200).json(updatedPatient);
}

const createPatient = async (req, res) => {
  const { email, password, name, pfp, appointments } = req.body;

  const newPatient = new Patient({ email, name, password, pfp, appointments });

  try {
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

module.exports = {
  getPatients,
  getPatient,
  updatePatient,
  createPatient
}