const mongoose = require("mongoose");

// Person object
const mohSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true,
    match: /^[A-Za-z]+$/,
    minlength: 1,
    maxlength: 16
  },
  givenName: {
    type: String,
    required: true,
    //match: /^[A-Za-z]+$/,
    //match: /(\s)/,
    minlength: 1,
    maxlength: 16
  },
  birthDate: {
    type: Date,
    required: true
  },
  residence: {
    type: String,
    required: true,
    match: /^[A-Za-z]+$/,
    minlength: 1,
    maxlength: 20
  },
  occupation: {
    type: String,
    required: true,
    match: /^[A-Za-z]+$/,
    minlength: 5,
    maxlength: 50
  },
  nationality: {
    type: String,
    required: true,
    match: /^[A-Za-z]+$/,
    minlength: 5,
    maxlength: 20
  },
  gender: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Moh", mohSchema);