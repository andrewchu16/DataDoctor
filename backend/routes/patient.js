const express = require("express");

const router = express.Router();

// GET all patients
router.get("/", (req, res) => {
  res.send("GET all patients");
});

// GET a single patient
router.get("/:id", (req, res) => {
  res.send("GET a single patient");
});

// UPDATE a single patient
router.patch("/:id", (req, res) => {
  res.send("UPDATE a single patient");
});

// POST a new patient
router.post("/", (req, res) => {
  res.send("POST a new patient");
});

module.exports = router;
