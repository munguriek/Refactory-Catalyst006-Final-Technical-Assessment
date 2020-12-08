const express = require("express");
const router = express.Router();
const PatientInfo = require("../models/PatientInfo");

router.get("/patientRegForm", (req, res) => {
  res.render("patientRegForm");
});

//SAVING PATIENT INFORMATION TO THE DATABASE
router.post("/patientRegForm", async (req, res) => {

  try {
    const patientDetails = new PatientInfo(req.body);
    await patientDetails.save();
    res.redirect('back');
  } catch (err) {
    res.status(400).send("Ooops! Something went wrong.");
    console.log(err);
  }

});

//RETRIEVE CLIENTS' DATA FROM THE DATABASE

router.get("/patientInfo", async (req, res) => {
    try {
      let items = await PatientInfo.find(); 
      res.render("patientInfo", {
        users: items,
      });
    } catch (err) {
      res.status(400).send("Unable to find items in the database");
    }
});

  module.exports = router;