const mongoose = require('mongoose');

const RegSchema = new mongoose.Schema({
    surname:{
    type: String,
    trim: true,
  },
  givenname:{
    type: String,
    trim: true,
  },
DateOfBirth:{  
    type: String,
    trim: true,
  },

  placeOfResidence:{
    type: String,
    trim: true,
  },
  occupation: {
    type: String,
    trim: true,
  },
  
  nationality: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  category:{
    type: String,
    trim: true,
  },
 

  
  

});

module.exports = mongoose.model('Patients', RegSchema);