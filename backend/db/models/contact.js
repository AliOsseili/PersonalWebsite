const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    message: {
        type: String,
        trim: true,
    },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
