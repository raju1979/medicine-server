const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const bodyParse = require('body-parser');
const morgan = require('morgan');
const app = express();

morgan.token('host', function(req, res) {
	return req.hostname;
});

const searchRoute = require('./routes/route');

require('dotenv').config();

app.use(cors());
app.use(morgan(':method :host :status :res[content-length] - :response-time ms')) // This is a modified version of morgan's tiny predefined format string.);
app.use('/api/v1/search', searchRoute);

const PORT = process.env.PORT || 5000;


mongoose.connect('mongodb+srv://raju:2180450a@cluster0-il4kd.mongodb.net/medicines?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
    console.log('connected');
    connection.db.listCollections().toArray(function (err, names) {
        if (err) {
          console.log(err);
        } else {
          console.log(names);
        }
  
      });
})

app.get('/', function (req, res, next) {
    medicine.countDocuments({}, (err, count) => {
        if(!err) {
            console.log(count);
        }
        res.json({ msg: 'This is CORS-enabled for all origins!' })
    })    
})



app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`)
})