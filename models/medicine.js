var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var schema = new mongoose.Schema(
    { 
        med_name: 'string', 
        med_packaging: 'string' ,
        med_availability: 'string' ,
        med_manufacturer: 'string' ,
        med_salt: 'string' ,
        med_price: 'number' ,
        med_img_url: 'string' ,
    }
);

schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Medicine', schema, 'Medicines');