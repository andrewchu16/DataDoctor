const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    pfp: {
      type: String,
      required: true,
    },
    appointments: [{
      type: String,
      required: true,
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);