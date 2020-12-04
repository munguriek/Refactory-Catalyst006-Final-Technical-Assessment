const express = require('express');
const mongoose = require('mongoose');
const Patient = require('../models/Patient');
const router = express.Router();


router.get('/', (req, res) => {
    res.render("index", {title:"Virus-Test"});
  });

router.post('/', async (req, res) => {
    try{
      const patient = new Patient(req.body);
      await patient.save()
        console.log('Patient Added')
        res.redirect('/');
     
    } catch(error) {
      res.status(400).send('Sorry, something broke');
      console.log(error);
    }
  });

module.exports = router;