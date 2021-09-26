
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon')

require('dotenv').config();

let initial_path = path.join(__dirname, "public");

let app = express();

app.use(express.static(initial_path));
app.use(favicon(path.join(initial_path, 'favicon.ico')));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
});

app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
});

app.use((req, res) => {
    res.json("404");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});