// Index file to get the server running
// Require modules needed for the project
const express=require("express");
const bodyParser= require('body-parser');
const path=require("path");
require('dotenv').config();

const mongoose=require("mongoose");
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
  useFindAndModify:false
  });
  mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
  const routes =require("./routes/route");

// initialise express to be used for 
const app=express();
// Setting the engine pug to be used to view our html files
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));

// Using our middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"public")));

app.use("/",routes);



// created a server have it listen at port 3000
app.listen(3000,()=>console.log("Listening at port 3000"));