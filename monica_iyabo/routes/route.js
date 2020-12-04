//importing express and other methods by requiring them
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const register=require("../models/register");
const Reg = mongoose.model("register");


router.get("/register",(req,res)=>{

    res.render("register");
    console.log("Hello welcome my assesment project");
})
router.post("/register",async(req,res)=>{
    try{
   
    const items = new Reg(req.body);
    console.log(req.body);
    await items.save();

    }catch(err){
        res.status(404).send('Sorry! Something went wrong.')
        console.log(err)
    }
})

module.exports = router;