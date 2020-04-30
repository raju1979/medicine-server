const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()

require('dotenv').config();

app.use(cors());

app.get('/', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.listen(5000, function () {
    console.log('CORS-enabled web server listening on port 80')
})