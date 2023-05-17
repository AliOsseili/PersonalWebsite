const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;

mongoose
    .connect(process.env.DB_LOGIN)
    .then(() => console.log("Connected to DB on MongoDB"))
    .catch((error) => console.log(error));

module.exports = mongoose;
