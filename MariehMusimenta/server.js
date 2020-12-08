
// Creates a express server.
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
// const User = require("./models/user");

// Declaring Routes in the server.
const myRoutes = require("./routes/myRoutes");

// Creates an express server.
const app = express();

//Database installation  
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`connection errr: ${err.message}`);
  });

// Configurations.
// Setting the engine view which contains the the pug & Html files.
app.set("view engine", "pug");
app.set("views", "./views");

// Insta & Middlewares.
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Instations for routes
app.use("/", myRoutes);

// And end point that doesnt exist.
app.get("*", (req, ress) => {
  ress.send("error");
});





//where browsers connect with the help of listen .
app.listen(3000, ()=> {
    console.log('listening on  port 3000');
  })