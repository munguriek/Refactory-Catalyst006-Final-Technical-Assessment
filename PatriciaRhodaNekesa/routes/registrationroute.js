const express = require('express');

const router = express.Router();

const testreg = require('../Models/Covidreg')


router.get('/register', (req,res)=>{
    res.render('testreg')
})

router.post('/register', async(req,res)=>{
    try{
        const newsuspect = new testreg(req.body);
        await newsuspect.save(()=>{
            console.log('save success')
            res.render('testreg2')
        })

    }
    catch(err){
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})
module.exports = router;
