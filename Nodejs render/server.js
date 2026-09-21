const express = require("express");

const app = express();

app.use(express.json());


app.get("/getData", (req, res) => {
    res.send("Server is running successfully!");
});


app.post("/data", (req, res) => {
    const data = req.body;

    res.json({
        message: "Data received successfully",
        data: data
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});