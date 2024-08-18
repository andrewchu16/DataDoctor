require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// Initialize Express app.
const app = express();

// Middleware
app.use(express.json()); // Parses JSON in the request body

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
}); // Logger

// Routes
app.use("/api/workouts", workoutRoutes);

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
