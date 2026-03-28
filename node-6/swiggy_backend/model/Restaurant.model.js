const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    rating: Number,
    cuisines: String,
    deliveryTime: String
})

const RestaurantModel = mongoose.model('Restaurant' , restaurantSchema);

module.exports = RestaurantModel;