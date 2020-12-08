console.log('Hello, World! Node is working...')

const express = require('express')

const path=require('path')
const registrationRoutes=require('./routes/registerroutes')

const bodyParser= require('body-parser')

const multer = require('multer');

require('dotenv').config();
const mongoose = require('mongoose');

// Requiring to Database
require('./model/registeration');

const app = express();

//Setting up the view engine Pug.
app.set('view engine', 'pug');
app.set('views', './views')

app.use(express.urlencoded({extended:true}))
//body parser middleware
app.use(bodyParser.urlencoded({extended: true}))

// Registering use of middleware
app.use('/',registrationRoutes);

app.use(express.static(path.join(__dirname, "public")));



//db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

//calling html file in the view folder this helps in using html if you dont want to use Pug.
var view = "./views/";

app.set('view engine', 'pug')
app.set('views', './views');

app.get('*', (req, res) => {
  res.send('ERROR')
})

// Listening for requests: the server!
app.listen(3000, () => {
    console.log(`Express running → PORT 3000`);
});