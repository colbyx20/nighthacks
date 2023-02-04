const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

app.get('/hi', (req,res) => {
    res.send("TESTING");
});

app.post('/hi', (req,res) => {
    res.send("TESTING");
});

app.put('/hi', (req,res) => {
    res.send("TESTING");
});

app.delete('/hi', (req,res) => {
    res.send("TESTING");
});


app.listen(4000);