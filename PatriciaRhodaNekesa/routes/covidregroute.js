const express = require('express');

const router = express.Router();

const regschema = require('../Models/Covidreg')

router.get('/register', (req,res) => {
    res.render("testreg")
});

router.post('/register', async(req,res)=>{
    try{
        const newcovidtest = new regschema(req.body);
        await newcovidtest.save(() => {
            console.log(req.body)
            console.log('save success')
            res.render('testreg2')
        })
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }   
})

module.exports= router;