// Index file to get the server running
// Require modules needed for the project
const express=require("express");
const bodyParser= require('body-parser');
const path=require("path");
// initialise express to be used for 
const app=express();
// Setting the engine pug to be used to view our html files
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));

// Using our middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(res,req)=>{
    res.render("register");
    console.log("Hello welcome my assesment project");
})


// created a server have it listen at port 3000
app.listen(3000,()=>console.log("Listening at port 3000"));