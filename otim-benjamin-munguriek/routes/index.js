const express = require('express');
const mongoose = require('mongoose');
const Patient = require('../models/Patient');

const router = express.Router();

const Patients = mongoose.model('Patient');

router.get('/', (req, res) => {
    res.render("index", {title:"Virus-Test"});
  });

module.exports = router;