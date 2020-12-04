const mongoose=require("mongoose");
const registerSchema=new mongoose.Schema({
    surname:{
        type:String,
        trim:true,
    },
    givenname:{
        type:String
    },
    dob:{
        type:String,
        unique:true
    },
    dob:{
        type:Date,
        trim:true,
    },
    gender:{type:String},
    residence:{type:String},
    nationality:{type:String},

})
    module.exports=mongoose.model("register",registerSchema);