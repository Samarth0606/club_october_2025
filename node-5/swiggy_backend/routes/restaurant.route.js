const { readRestaurant, createRestaurant } = require("../controller/restaurant.controller");


function restaurantRoute(app){
    // read
    app.get('/api/restaurants', readRestaurant)
    // create
    app.post('/api/restaurant', createRestaurant)
}

module.exports = restaurantRoute;