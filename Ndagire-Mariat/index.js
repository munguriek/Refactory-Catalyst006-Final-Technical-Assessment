const express=require('express');
const path=require('path');
const mongoose = require('mongoose');
const  bodyparser=require('body-parser');
require('dotenv').config();
const indexroute=require('./routes/indexroute');

const app=express();

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
  
  
  app.set('view engine','pug')
  app.set('views',path.join(__dirname,'views'));
  app.use(bodyparser.urlencoded({extended:true}));
  app.use(express.static(path.join(__dirname,'public')));
  app.use('/',indexroute);




  app.listen('3000',()=>{
    console.log("Listening on port 3000");
});