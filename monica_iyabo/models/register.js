const mongoose=require("mongoose");
const registerSchema=new mongoose.Schema({
    surname:{
        type:String,
    },
    givenname:{
        type:String
    },
    dob:{
        type:String,
    },
    gender:{type:String},
    residence:{type:String},
    nationality:{type:String},
    gender:{type:String},
    category:{type:String},

})
    module.exports=mongoose.model("register",registerSchema);