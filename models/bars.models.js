var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var BarsSchema = new Schema({
    name: String,
    image_url: String,
    photos: [String],
    rating: Number,
    phone: Number,
    address: [String],
    reviews: [Schema.Types.Mixed]
})


module.exports = mongoose.model('Bars', BarsSchema)