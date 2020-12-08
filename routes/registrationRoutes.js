const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration')

router.get('/registrationform', (req,res) =>{
    res.render('registrationform');
});

router.post('/registrationform', async(req,res)=>{
    try{
        const registration = new Registration(req.body)
        await registration.save()
        console.log('registration')
        res.redirect('back')
    }catch(err){
        res.status(400).send('Something went wrong')
        console.log(err);
    };
});

module.exports = router;