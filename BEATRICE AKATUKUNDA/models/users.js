const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegForm = Schema({
    surname: { type: String, required: true },
    given_name: { type: String, required: true },
    dob: { type: String, required: true },
    address: { type: String, required: true },
   
    residence: {
        type: String,
      required: true,
    },
    occupation: {
        type: String,
       },

    nationality: {
        type: String,
       
        required: true ,
    },
    gender: [{
        type: String,
       
        required: true 
    }],
   
    select: { type: String },
 

   
});





module.exports = mongoose.model("RegForm", RegForm);