var mongoose = require('mongoose');

var vehicle = mongoose.Schema({
    plateNumber : String,
    fuelLevel : Number,
    battery : Number,
    location: {
        lat : Double,
        long : Double
    }
})

module.exports = mongoose.model('vehicle',vehicle);