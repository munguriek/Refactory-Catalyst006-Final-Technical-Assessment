//  importing packages
const express = require("express");
const bodyParser = require("body-parser"); //plugin that connects the front end to the server
const mongoose = require("mongoose");
path = require("path"); //helps to set a path for a given directory(pug)
require("dotenv").config();
const registrationroute = require("./routes/covidreg");
const Covidform = require("./models/Registration");

// creating an express application by calling the express() function(instantiating) 
const app = express();

// connect to database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// set up pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));




//      using imported routes


app.use("/", registrationroute);


app.get("*", (req, res) => {
  res.send("error page");
});

//creating server where browsers can connect and it is listenening on port 3000
app.listen(3000, () => console.log("listening on port 3000"));
