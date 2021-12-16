const express = require("express");
const options = require("./options");
const newsRouter = require("./news");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/news", newsRouter);

app.all("*", (req, res) => {
    res.status(404).send("URL not found");
});

app.listen(options.port, () => {
    console.log(`http://localhost:${options.port}`);
});