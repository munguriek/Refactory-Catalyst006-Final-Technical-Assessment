const path = require('path')
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
require('dotenv').config()

const app = express();
const RegistrationRoute = require("./routes/usersroutes");


// Express configs.
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

// ------------MIDDLEWARE------------
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// ------------DATABASE--------------
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});






// Test connection to mongo.
let db = mongoose.connection;
db.on("open", () => console.log("Connected to Mongo"));
db.on("error", (err) => console.log(err));



app.use("/", RegistrationRoute);

app.get("*", (req, res) => {
    res.send("Invalid request");
});


app.listen(3000, () =>
    console.log('listening on 3000')
)