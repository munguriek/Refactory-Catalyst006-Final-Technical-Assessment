const express = require('express');
const router = express.Router();
const Patients = require('../models/registration');



router.get('/index', (req, res)=>{
    res.render("./index");
});
router.post('/index', async(req, res)=>{
    const patient=new Patients(req.body);
      try{
        console.log(patient);
           await patient.save();
           console.log("Registration successful");
           res.redirect('/index');
      
      }catch(err){
       console.log(err);
        res.status(400).send('Unable to save patient to the database');
      }
})
module.exports=router;
