var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: String,
    position: String,
    game1Status: String,
    game2Status: String,
    game3Status: String
})

mongoose.model('Player', PlayerSchema);