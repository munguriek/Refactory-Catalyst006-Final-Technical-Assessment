// Import dependency
const express = require('express');

// Import model
const Moh = require('../models/healthFormModel');

// Create a router
const router = express.Router();

// Displays the moh page
router.get('/', (req, res) => {
  res.render('healthForm');
});

// Save entry to database
router.post('/', (req, res) => {
  const moh = new Moh(req.body);
  moh.save()
    .then(() => { res.send(' Registration was successful!'); })
    .catch((err) => {
      console.log(err);
      res.send('');
    });
});

//
module.exports = router;