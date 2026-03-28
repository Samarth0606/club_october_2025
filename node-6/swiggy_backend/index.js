const express = require('express');
const app = express();
const mongoose = require('mongoose');
const restaurantRoute = require('./routes/restaurant.route')
const userRoute = require('./routes/user.route')

// local DB
// mongoose.connect('mongodb://127.0.0.1:27017/samosa') //promise
// cloud DB
mongoose.connect('mongodb+srv://samarthvohraindia_db_user:5kx1J5WLVYtB0CCx@cluster0.j7nop0u.mongodb.net/') 
.then(()=>{
    console.log('DB CONNECTED cloud')
})
.catch((ERR)=>{
    console.log('DB NOT CONNECTED' , ERR) 
})

app.use(express.json()) //body parsing middleware

app.get('/' , (req,res)=> res.send("Root route"))

restaurantRoute(app)
userRoute(app)

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server connected at port: ${PORT}`);
})