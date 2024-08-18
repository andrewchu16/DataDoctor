const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transcriptSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

const appointmentData = new Schema(
  {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    audioData: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    transcript: {
      type: [transcriptSchema],
      required: true
    },
    status: {
      type: String,
      required: true
    },
    patientId: {
      type: String,
      required: true
    },
    doctorId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentData);
