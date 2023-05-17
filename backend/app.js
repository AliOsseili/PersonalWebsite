const express = require("express");
const app = express();
const contact = require("./db/models/contact");
const mongoose = require("./db/mongoose");

app.use(express.json());

/**
 * CORS For Local hosting
 *
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,HEAD,OPTIONS,PUT,PATCH,DEL"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, A"
    );
    next();
});

app.post("/api", (req, res) => {
    new contact({ name: req.body.name, message: req.body.message })
        .save()
        .then((cont) => res.send(cont))
        .catch((error) => console.log(error));
});
app.listen(8080, () => console.log("Server Connected on port 8080"));
