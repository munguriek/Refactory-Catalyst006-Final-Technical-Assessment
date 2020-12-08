const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
surname:String,
givenname:String,
dob: Date,
place:String,
occupation: String,
nationality: String,
gender:String,
category:String,
})

module.exports = mongoose.model('Covidform', RegistrationSchema);