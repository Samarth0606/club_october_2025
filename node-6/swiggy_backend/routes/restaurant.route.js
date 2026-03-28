const { readRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } = require("../controller/restaurant.controller");


function restaurantRoute(app){
    // read
    app.get('/api/restaurants', readRestaurant)
    // create
    app.post('/api/restaurant', createRestaurant)
    // edit
    app.patch('/api/restaurant/:id', updateRestaurant )
    // delete
    app.delete('/api/restaurant/:id', deleteRestaurant)
}

module.exports = restaurantRoute;