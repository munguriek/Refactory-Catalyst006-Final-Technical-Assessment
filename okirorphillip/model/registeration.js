const mongoose = require('mongoose');

const registerationsSchema = new mongoose.Schema({
    surname: String,
    givenname: String,
    bd: String,
    place: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String,
});
module.exports = mongoose.model('Registeration', registerationsSchema); 