const express = require("express");
const router = express.Router();
const Covidform = require("../models/Registration");

// specify what to do when user hit the endpoint
router.get('/covidregistration', (req, res) => {
    res.render('Reg')
})

// save data to the database
router.post('/covidregistration', async (req, res) => {
    try {
        const registration = new Covidform (req.body);
        await registration.save(() => {
            console.log('save success')
            res.redirect('/covidregistration')
       
        })
    }
    catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})
  
  module.exports = router;