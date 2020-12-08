// Import functionality required.
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// Express configs.
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

// Import Routes.
const formRegistration = require("./routes/formRegistrationRoutes")

//Middlewares.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Database connections.
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

// ROUTES.
app.use("/", formRegistration);

// Undefined routes.
app.get("*", (req, res) => {
  res.send("Invalid request");
});

// Listening on port 3000.
app.listen(3000);
