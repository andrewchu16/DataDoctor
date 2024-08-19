require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const doctorRoutes = require("./routes/doctor");
const patientRoutes = require("./routes/patient");
const appointmentRoutes = require("./routes/appointment");

// Initialize Express app.
const app = express();

// Middleware
app.use(express.json()); // Parses JSON in the request body

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
}); // Logger

// Routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log("Server running at http://localhost:" + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
