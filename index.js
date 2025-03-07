const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, World! 🚀 This is my Express app.");
});


app.get("/about", (req, res) => {
    res.send("Hello, World! 🚀 This is my about app.");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
