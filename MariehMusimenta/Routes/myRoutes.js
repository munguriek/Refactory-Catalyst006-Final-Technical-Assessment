const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/user')




 router.get('/', (req, res) => {
     res.render('REG')
 })

 router.post('/coronavirus', async (req, res) => {
     res.send('Thank you for registering ')
     try{
   console.log(req.body)
        const items = new User(req.body);
        await items.save();
        res.send("Thank You for registering ")
        } catch (err) {
        res.send('Oops! Something went wrong');
        console.log(err)
     }
 })




module.exports = router;