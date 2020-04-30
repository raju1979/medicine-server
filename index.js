const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

require('dotenv').config();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`)
})