const Doctor = require("../models/doctorData");
const mongoose = require("mongoose");

// Get all doctors
const getDoctors = async (req, res) => {
  const doctors = await Doctor.find({}).sort({ createdAt: -1 });

  res.status(200).json(doctors);
};

// Get a single doctor
const getDoctor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No doctor with that id");
  }

  const doctor = await Doctor.findById(id);

  res.status(200).json(doctor);
};

// Update a single doctor
const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const { email, name, pfp, appointments, institution } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No doctor with that id");
  }

  const updatedDoctor = {
    email,
    name,
    pfp,
    appointments,
    institution,
    _id: id,
  };

  await Doctor.findByIdAndUpdate(id, updatedDoctor, { new: true });

  res.status(200).json(updatedDoctor);
};

// Create a new doctor
const createDoctor = async (req, res) => {
  const { email, password, name, pfp, appointments, institution } = req.body;

  const newDoctor = new Doctor({
    email,
    name,
    password,
    pfp,
    appointments,
    institution,
  });

  try {
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getDoctors,
  getDoctor,
  updateDoctor,
  createDoctor,
};
