const express = require("express");

const router = express.Router();

// GET all appointments
router.get("/", (req, res) => {
  res.send("GET all appointments");
});

// GET a single appointment
router.get("/:id", (req, res) => {
  res.send("GET a single appointment");
});

// UPDATE a single appointment
router.patch("/:id", (req, res) => {
  res.send("UPDATE a single appointment");
});

// POST a new appointment
router.post("/", (req, res) => {
  res.send("POST a new appointment");
});

module.exports = router;
