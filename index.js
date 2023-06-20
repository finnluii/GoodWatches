const path = require('path');

const express = require('express');
const app = express();
const port = 3000;

const CLIENT_DIR = `${__dirname}/client/src/bootstrap_files`;

app.use(express.static(path.join(__dirname, "/client/src/bootstrap_files")));

app.get("/", (req, res) => {
    res.sendFile(`${CLIENT_DIR}/index.html`);
});

app.get("/about", (req, res) => {
    res.sendFile(`${CLIENT_DIR}/about.html`);
});

app.get("/movies", (req, res) => {
    res.sendFile(`${CLIENT_DIR}/about.html`);
});

app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});