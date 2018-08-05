var mongoose = require('mongoose');

var vehicle = mongoose.Schema({
    plateNumber : String,
    fuelLevel : Number,
    battery : Number,
    location: {
        lat : String,
        long : String
    }
})

module.exports = mongoose.model('vehicle',vehicle);