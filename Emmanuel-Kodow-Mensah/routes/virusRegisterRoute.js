

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
      res.redirect("/registerAlert");
    });
  } catch (error) {
    res.status(400).send("Hello try again.");
    console.log(error);
  }
});


// retrieve data from the database 
router.get('/', async (req, res) => {
  if (req.session.user) {
      try {
          let user = await COVID_9_testRegister.find()
          if (req.query.gender) {
              user = await COVID_9_testRegister.find({ gender: req.query.gender })
          }
          res.render('Alert', { title: ' New COVID-TEST  Register', users: user, currentUser:req.session.user})
      } catch (err) {
          res.status(400).send("Unable to find profile in the database");
      }
  }else {
      console.log("Can't find Registration form")
      res.redirect('/registerAlert')
  }
})
























module.exports = router;


