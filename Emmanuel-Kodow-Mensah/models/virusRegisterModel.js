const mongoose = require("mongoose");

const COVID_19_testRegisterSchema = new mongoose.Schema({
  surname: {
    type: String,
  
  },

  gname: {
    type: String,

  }, 
  
  dob: {
    type: String,
  },
  PoB: {
    type: String,
  },
  occup: String,
  gender: String,
  phoneNum: String,
  ward: String,
  uniqID: String,
  niN: {
    type: String,
  },
  ufActivity: [{
    type: String
  }],

});

module.exports = mongoose.model("COVID_19_testRegister", COVID_19_testRegisterSchema);
