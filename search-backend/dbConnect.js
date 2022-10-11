require('dotenv').config();
const mongoose = require('mongoose');
const mongoURL = process.env.MONGOURL

try{
    mongoose.connect(mongoURL); 
    console.info("Connection Success")
}
catch (ex) {
    console.error("Error connecting to database", ex)
}

mongoose.Promise = global.Promise 
const database = mongoose.connection


module.exports = { database }