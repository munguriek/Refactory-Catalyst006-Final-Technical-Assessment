const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
  
const Registeration=require('../model/registeration')


//Registration
router.get('/', (req, res) => {
    res.render('index')
  })

  router.post('/', async (req, res) => {
    const registrationmodel = new Registeration(req.body);
    try {
      await registrationmodel.save()
      res.redirect('/')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })                                           
module.exports=router;