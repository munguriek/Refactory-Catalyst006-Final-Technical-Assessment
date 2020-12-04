const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const user = require('./models/Patient');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); //Setting the view engine to pug


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public')); //Directing express to render static files from public
app.use('/', routes);


module.exports = app;