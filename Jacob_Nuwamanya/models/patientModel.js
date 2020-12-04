const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
    surname:String,
    given:String,
    dob:String,
    place:String,
    occupation:String,
    nationality:String,
    gender:String,
    category:String,
});

module.exports = mongoose.model("patient", patientSchema);
