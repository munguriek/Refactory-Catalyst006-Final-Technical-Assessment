//importing express and other methods by requiring them
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const register=require("../models/register");
const Reg = mongoose.model("register");


router.get("/",(req,res)=>{

    res.render("register");
    console.log("Hello welcome my assesment project");
})
router.post("/",async(req,res)=>{
    const items=await Reg.save()
    res.redirect("back",{register:items})
})

module.exports = router;