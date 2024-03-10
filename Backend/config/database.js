
const mongoose = require("mongoose");
require("dotenv").config();

const connent = () => {
    mongoose.connect(process.env.DB_URL)
    .then( () => {
        console.log("DB connected Succesfully...");
    })
    .catch( () => {
        console.log("DB Connection Failed...");

    })
}

module.exports = connent;