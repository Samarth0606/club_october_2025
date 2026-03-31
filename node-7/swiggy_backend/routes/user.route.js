const { register, login } = require("../controller/user.controller");


function userRoute(app){
    // register
    app.post('/api/register', register)
    // login
    app.post('/api/login', login)
   
}

module.exports = userRoute;