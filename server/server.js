import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import bodyParser from "body-parser";
import Card from "./models/cards/dbCards.js";
import "dotenv/config.js";

const app = express();
const port = process.env.PORT || 8001;
const connectionURL = process.env.DB_URL;

app.use(express.json());
app.use(Cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect(connectionURL, {
    autoIndex: true
});

app.get("/", (req, res) => res.status(200).send("Hello world!"));

app.post("/tinder/cards", (req, res) => {
    const dbCards = req.body;
    console.log(JSON.stringify(req.body));
    Card.insertMany([dbCards]).then(createdCards => {
        res.status(201).send(createdCards);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get("/tinder/cards", (req, res) => {
    Card.find({}).then(foundCards => {
        res.status(200).send(foundCards);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));