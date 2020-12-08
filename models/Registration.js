const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    surname: String,
    givenname: String,
    dob: String,
    residence: String,
    occupation: String,
    nationality: String,
    gen: String,
    category: String,
})

module.exports = mongoose.model('Registration', registrationSchema)