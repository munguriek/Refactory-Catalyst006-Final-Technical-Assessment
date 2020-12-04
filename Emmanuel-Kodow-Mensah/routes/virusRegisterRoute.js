

const express = require("express");
const router = express.Router();
const virusRegisterModel = require("../models/virusRegisterModel");




//route for urban farmer registration form forms
router.get("/", (req, res) => {
  res.render("patientRegister", { title: "COVI-19 Test Registration form" });
});

//Save data the database
router.post("/", async (req, res) => {
  try {
    const userdetails = new virusRegisterModel(req.body)
    const user = new COVID_9_testRegister(req.body);
    user.save();
    await virusRegisterModel.register(userdetails, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/patientRegistration");
    });
  } catch (error) {
    res.status(400).send("Hello try again.");
    console.log(error);
  }
});



// retrieve data from the database 
router.get('/registredprofiles', async (req, res) => {
  if (req.session.user) {
      try {
          let user = await COVID_9_testRegister.find()
          if (req.query.gender) {
              user = await COVID_9_testRegister.find({ gender: req.query.gender })
          }
          res.render('foDash', { title: ' COVID-TEST  Register', users: user, currentUser:req.session.user})
      } catch (err) {
          res.status(400).send("Unable to find items in the database");
      }
  }else {
      console.log("Can't find session")
      res.redirect('/signin')
  }
})
///// delete 
router.post('/delete', async (req, res) => {
  if (req.session.user) {
      try {
          await ufRegister.deleteOne({ _id: req.body.id })
          res.redirect('back')
      } catch (err) {
          res.status(400).send("Unable to delete item in the database");
      }
  }else {
          console.log("Can't find session")
          res.redirect('/signin')
      }
})

//update data fields
router.get('/ufupdate/:id', async (req, res) => {
  if (req.session.user) {
      try {
          const updateUser = await ufRegister.findOne({ _id:req.params.id })
          res.render('ufprofileUpdate', { user: updateUser })
      } catch (err) {
          res.status(400).send("Unable to find item in the database");
      }
  }else {
      console.log("Can't find session")
      res.redirect('/signin')
  }
})

router.post('/ufupdate', async (req, res) => {
if (req.session.user) {
  try {
      await ufRegister.findOneAndUpdate({_id:req.query.id}, req.body)
      res.redirect('ufProfiles');
  } catch (err) {
      res.status(404).send("Unable to update selected Urban Farmer detial in the database");
  } 
}else {
  console.log("Can't find Urban Farmer profile details")
  res.redirect('/signin')
}   
})

//verifying product

router.get('/verify/:id', async (req, res) => {
  if (req.session.user) {
      try {
          const updateItem = await productRegister.findOne({ _id:req.params.id })
          res.render('verify', {item: updateItem })
      } catch (err) {
          res.status(400).send("Unable to find item in the database");
      }
  }else {
      console.log("Can't find session")
      res.redirect('/signin')
  }
})

router.post('/verify', async (req, res) => {
if (req.session.user) {
  try {
      await productRegister.findOneAndUpdate({_id:req.query.id}, req.body)
      res.redirect('ufProfiles');
  } catch (err) {
      res.status(404).send("Unable to verify product database");
  } 
}else {
  console.log("Can't find product verification ")
  res.redirect('/signin')
}   
})


//Verified Product list

router.get('/verifiedProductList', async (req, res) => {
  try {
    let item = await productRegister.find();
    if(req.query.type) {
      item = await productRegister.find(
        {
        type:req.query.type
      });
    }
      res.render('verifiedPdtList', {title: 'Product list', items:item, 
      currentUser:req.session.user});     
    } catch (err) {
      res.status(404).send("unable to find verified product");
    }
})

























module.exports = router;


