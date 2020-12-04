const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    surname: String,
    givenName: String,
    dob: String,
    residence:String,
    occupation: String,
    nationality:String,
    patientCategory:String,
    gender: String,
  });

  module.exports = mongoose.model('PatientInfo', patientSchema);