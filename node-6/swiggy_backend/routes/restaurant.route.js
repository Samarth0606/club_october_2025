const { readRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } = require("../controller/restaurant.controller");
const verifyToken = require("../middleware/verify");


function restaurantRoute(app){
    // read
    app.get('/api/restaurants', verifyToken , readRestaurant)
    // create
    app.post('/api/restaurant', verifyToken ,createRestaurant)
    // edit
    app.patch('/api/restaurant/:id', verifyToken ,updateRestaurant )
    // delete
    app.delete('/api/restaurant/:id', verifyToken, deleteRestaurant)
}

module.exports = restaurantRoute;