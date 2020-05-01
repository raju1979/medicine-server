const medicine = require('../models/medicine');
const mongoosePaginate = require('mongoose-paginate-v2');




module.exports.getRecordsByAlphabet = function(req, res) {
    const options = {
        page: 1,
        limit: 10,
        collation: {
          locale: 'en'
        }
      };
    console.log(req.params.alphabet)
    const params =  new RegExp(`^${req.params.alphabet}`, "gi");
    console.log(params)
    // `${req.params.alphabet}`
    medicine.paginate({"med_name": params}, options, function(err, result) {
        if(err) {
            res.json({ success: false, err:  err}).status(400);
        } else {
            res.json({ success: true, data:  result}).status(200);
        }
        
    })
}

module.exports.getRecordsByMatchingText = function(req, res) {
    const options = {
        page: 1,
        limit: 10,
        collation: {
          locale: 'en'
        }
      };
    console.log(req.params.alphabet)
    const params =  new RegExp(`${req.params.text}`, "gi");
    console.log(params)
    // `${req.params.alphabet}`
    medicine.paginate({"med_name": params}, options, function(err, result) {
        if(err) {
            res.json({ success: false, err:  err}).status(400);
        } else {
            res.json({ success: true, data:  result}).status(200);
        }
        
    })
}