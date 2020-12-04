//Import Dependencies
const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv/config")

const app = express();

// Import routes
const testroute = require('./routes/covidregroute')

//  DB Connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

  

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', testroute)



app.listen(3000, () => console.log("Listening on port 3000")); //Created a server and have it's listen on port 3000


