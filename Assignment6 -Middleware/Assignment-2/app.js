const express = require("express");

const app = express();
const PORT = 3000;

function logger(req, res, next) {
    const dateTime = new Date().toLocaleString();

    console.log(`${req.method} ${req.url} ${dateTime}`);

    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Us");
});

app.get("/contact", (req, res) => {
    res.send("Contact Information");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});