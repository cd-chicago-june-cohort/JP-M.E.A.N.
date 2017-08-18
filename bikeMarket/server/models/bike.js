var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BikeSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    city: String,
    state: String,
    seller: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

mongoose.model('Bike', BikeSchema);