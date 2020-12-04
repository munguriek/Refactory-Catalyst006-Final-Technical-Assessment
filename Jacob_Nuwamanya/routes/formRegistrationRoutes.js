const express = require("express");

// Import the patient model.
const Patient = require("../models/patientModel");

const router = express.Router();

// Routes
router.get("/", (req,res)=>{
    res.render("patientRegistration",{success:false});
})

router.post("/", async (req,res)=>{
    try{
        let patient = await Patient(req.body);
        patient.save();
        res.render("patientRegistration",{success:true})
    }catch(err){
        res.send("Something went wrong with registration")
        console.log({message:err})
    }    
} )
module.exports=router;