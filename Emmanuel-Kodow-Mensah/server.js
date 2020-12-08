/// Require express 
const express = require("express");
require("dotenv/config"); 
const mongoose = require("mongoose");

//Install pug and require path to use as view engine

const path = require("path");


//Setting up body parser
const bodyParser = require("body-parser");

const app = express();


//Require models
const virusRegisterModel = require("./models/virusRegisterModel");


//Require routes
const virusRegisterRoute = require("./routes/virusRegisterRoute");


//Database connection 
mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.set("useCreateIndex", true);

//Mongoos connection
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection is working");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

  // res.sendFile(__dirname + '/patientRegister.html')
  



//// Set up pug/ view template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//setting up middleware bodyParser
app.use(bodyParser.urlencoded({ extended: true }));



///USe routes
app.use("/", virusRegisterRoute);


//Connect ot public folder
app.use(express.static(path.join(__dirname, "public")));































console.log("I am here")

















//Server setup 
app.listen(8080, ()=> {
    console.log("Server is working on PORT 8080")
})

