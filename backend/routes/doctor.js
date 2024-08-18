const express = require("express");

const router = express.Router();

// GET all doctors
router.get("/", (req, res) => {
  res.send("GET all doctors");
});

// GET a single doctor
router.get("/:id", (req, res) => {
  res.send("GET a single doctor");
});

// UPDATE a single patient
router.patch("/:id", (req, res) => {
  res.send("UPDATE a single doctor");
});

// POST a new doctor
router.post("/", (req, res) => {
  res.send("POST a new doctor");
});

module.exports = router;
