const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    surname:{
        type:String,
    }, 
    givennames:{
        type:String,
    }, 
    dob:{
        type:String,
    }, 
    residence:{
        type:String,
    },
    occupation:{
        type:String,
    },
    nationality:{
        type:String,
    },
    
    gender:{
        type:String,
    }, 
    
    category:{
        type:String,
    },
    
});

module.exports = mongoose.model('Patient', patientSchema);