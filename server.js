const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

app.get('/hi', (req,res) => {
    res.send("TESTING");
});

app.listen(4000);