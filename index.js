const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const morgan = require('morgan');
const app = express();

require('dotenv').config();

app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://raju:2180450a@cluster0-il4kd.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log('db connected'))

app.get('/', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`)
})