// IMPORTING DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();  

// SET PUG AS VIEW TEMPLATE ENGINE
app.set('view engine', 'pug')
app.set('views', './views')

/* 
MULTIPLE STATIC DIRECTORIES
SERVING STATIC FILES WITH MIDDLEWARE FUNCTION express.static
*/
app.use(express.static('static/css'))
app.use(express.static('static/js'))
app.use(express.static('static/img'))
app.use(express.static('static/json'))
app.use(express.static('uploads'))

// MANIPULATE DATABASE USING JSON OR PUG FORM
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// ESTABLISHING DATABASE CONNECTION
mongoose.connect(process.env.DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// APP ROUTE
const appController = require('./controllers/healthFormRoutes');
app.use(appController);

// HANDLING NON-EXISTING ROUTES
app.get('*', (req, res) => {
  res.send('Error! Did not find that resource!');
})

// SERVER LISTENING TO REQUESTS
app.listen(3000, () => {
  console.log('listening on port 3000');
});