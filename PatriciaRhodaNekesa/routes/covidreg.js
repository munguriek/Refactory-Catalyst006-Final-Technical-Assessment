const express = require('express');

const router = express.Router();


const testreg = require('../Models/covidreg')

router.get('/register', (req,res) => {
    res.render("testreg")
});

router.post('/register', async(req,res)=>{
    try{
        const registeredcovidtest = new testreg(req.body);
            console.log(req.body);
        await registeredcovidtest.save(() => {
            console.log(req.body);
            console.log('save success')
            res.redirect('/register')
        })
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }   
})

module.exports= router;