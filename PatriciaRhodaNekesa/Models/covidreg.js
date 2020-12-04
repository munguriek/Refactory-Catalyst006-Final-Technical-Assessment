
const mongoose = require('mongoose');

const covidtestregschema = new mongoose.Schema({
    surname: {
      type:String,
    },
    givenname:{
      type: String,
    },
    dob:{
      type: String,
    },
    residence:{
      type: String,
    },
    occupation:{
      type: Number,
    },
    nationality:{
      type: String,
    }, 
    
    category:{
        type: String,
      },

    gender:{
        type: String,
    },
});


  module.exports = mongoose.model('covidtest', covidtestregschema);