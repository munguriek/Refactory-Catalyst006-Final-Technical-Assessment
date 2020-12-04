const express = require('express');
path = require('path');
const bodyParser = require('body-parser')
//import routes
const registrationRoutes = require('./routes/registrationRoutes')

const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

//Connecting mongoose
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
   useUnifiedTopology: true
})

mongoose.connection
    .on('open', () =>{
        console.log('Mongoose connection open');
    });
    // .on('error', (err) =>{
    //     console.log(`Connection error: ${err.message}`)
    // })

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Using the files in public 
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:true}));
//Using the imported routes
app.use('/', registrationRoutes);




app.get('*', (err) =>{
    res.send('Error page not found');
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});